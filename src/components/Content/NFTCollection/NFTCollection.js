import { useContext, useRef, createRef } from 'react';

import web3 from '../../../connection/web3';
import Web3Context from '../../../store/web3-context';
import CollectionContext from '../../../store/collection-context';
import MarketplaceContext from '../../../store/marketplace-context';
import { formatPrice } from '../../../helpers/utils';
import eth from '../../../img/eth.png';
import "./NFTCollection.css"

import SectionHeading from "../SectionHeading"

const NFTCollection = ({ClassTextDIV}) => {

  
  const web3Ctx = useContext(Web3Context);
  const collectionCtx = useContext(CollectionContext);
  const marketplaceCtx = useContext(MarketplaceContext);

  const priceRefs = useRef([]);
  if (priceRefs.current.length !== collectionCtx.collection.length) {
    priceRefs.current = Array(collectionCtx.collection.length).fill().map((_, i) => priceRefs.current[i] || createRef());
  }
  
  const makeOfferHandler = (event, id, key) => {
    event.preventDefault();

    const enteredPrice = web3.utils.toWei(priceRefs.current[key].current.value, 'ether');

    collectionCtx.contract.methods.approve(marketplaceCtx.contract.options.address, id).send({ from: web3Ctx.account })
    .on('transactionHash', (hash) => {
      marketplaceCtx.setMktIsLoading(true);
    })
    .on('receipt', (receipt) => {      
      marketplaceCtx.contract.methods.makeOffer(id, enteredPrice).send({ from: web3Ctx.account })
      .on('error', (error) => {
        window.alert('Something went wrong when pushing to the blockchain');
        marketplaceCtx.setMktIsLoading(false);
      }); 
    });
  };
  
  const buyHandler = (event) => {    
    const buyIndex = parseInt(event.target.value);      
    marketplaceCtx.contract.methods.fillOffer(marketplaceCtx.offers[buyIndex].offerId).send({ from: web3Ctx.account, value: marketplaceCtx.offers[buyIndex].price })
    .on('transactionHash', (hash) => {
      marketplaceCtx.setMktIsLoading(true);
    })
    .on('error', (error) => {
      window.alert('Something went wrong when pushing to the blockchain');
      marketplaceCtx.setMktIsLoading(false);
    });            
  };

  const cancelHandler = (event) => {    
    const cancelIndex = parseInt(event.target.value);
    marketplaceCtx.contract.methods.cancelOffer(marketplaceCtx.offers[cancelIndex].offerId).send({ from: web3Ctx.account })
    .on('transactionHash', (hash) => {
      marketplaceCtx.setMktIsLoading(true);
    })
    .on('error', (error) => {
      window.alert('Something went wrong when pushing to the blockchain');
      marketplaceCtx.setMktIsLoading(false);
    });    
  };


    return (

      <section className="pricing section-padding-100 relative">
        <div className="container">
          <SectionHeading
            title="New Listed NFTs"
            textTop="New Listed NFTs"
            textDown="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
            ClassTextDIV={ClassTextDIV}
            ClassTextH2="d-blue bold"
          />
            <div className="row text-center">
              {collectionCtx.collection.map((NFT, key) => {
                const index = marketplaceCtx.offers ? marketplaceCtx.offers.findIndex(offer => offer.id === NFT.id) : -1;
                const owner = index === -1 ? NFT.owner : marketplaceCtx.offers[index].user;
                const price = index !== -1 ? formatPrice(marketplaceCtx.offers[index].price).toFixed(2) : null;

                return(
                  <div className="col-md-3 pb-4">
                    <div key={key} className="p-3 card pricing-item box-shadow">
                      
                      <img src={`https://ipfs.infura.io/ipfs/${NFT.img}`} className="card-img-bottom" alt={`NFT ${key}`} />
                      <div>       
                        <h4>{NFT.title}</h4>
                      </div>                     
                      <p className="fw-light fs-6 mt-3">{`${owner.substr(0,7)}...${owner.substr(owner.length - 7)}`}</p>
                      {index !== -1 ?
                        owner !== web3Ctx.account ?
                          <div className="row">
                            <div className="d-grid gap-2 col-5 mx-auto">
                              <button onClick={buyHandler} value={index} className="btn btn-success">BUY</button>
                            </div>
                            <div className="col-7 d-flex justify-content-end align-items-center">
                              <img src={eth} width="25" height="25" className="align-center float-start mr-10" alt="price icon"></img>                
                              <p className="text-start mb-0"><b>{`${price}`}</b></p>
                            </div>
                          </div> :
                          <div className="row">
                            <div className="d-grid gap-2 col-5 mx-auto">
                              <button onClick={cancelHandler} value={index} className="btn btn-danger">CANCEL</button>
                            </div>
                            <div className="col-7 d-flex justify-content-end align-items-center">
                              <img src={eth} width="25" height="25" className="align-center float-start mr-10" alt="price icon"></img>                
                              <p className="text-start mb-0"><b>{`${price}`}</b></p>
                            </div>
                          </div> :
                        owner === web3Ctx.account ?              
                          <form className="row g-2" onSubmit={(e) => makeOfferHandler(e, NFT.id, key)}>                
                            <div className="col-5 d-grid gap-2">
                              <button type="submit" className="btn btn-secondary">OFFER</button>
                            </div>
                            <div className="col-7">
                              <input
                                type="number"
                                step="0.01"
                                placeholder="ETH..."
                                className="form-control"
                                ref={priceRefs.current[key]}
                              />
                            </div>                                  
                          </form> :
                          <p><br/></p>}
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
      </section>
    );
}

export default NFTCollection