import { useContext  } from 'react';

// import MintForm from './MintNFT/MintForm';
import logo from '../../img/logo2.PNG'
import CollectionContext from '../../store/collection-context';
import MarketplaceContext from '../../store/marketplace-context';
import Spinner from '../Layout/Spinner';

import WelcomeArea from "./WelcomeArea"
import MintSection from "./MintSection"
import NFTCollection from './NFTCollection/NFTCollection';
import OurService from "./OurService"
import ConnectWallet from "./ConnectWallet"
import FooterPages from "./FooterPages"
import '../../assets/css/general.css';
const Main = () => {
  const collectionCtx = useContext(CollectionContext);
  const marketplaceCtx = useContext(MarketplaceContext);
  
  return(
    <>
      <div className="container mt-2">
        <div className="row">
          <main role="main" className="col-lg-12 justify-content-center text-center">
            <div className="content mr-auto ml-auto">
              <img src={logo} alt="logo" width="300" height="100" className="mb-2"/>
            </div>
          </main>
        </div>
      </div>
      <WelcomeArea
          ClassSec="hero-section ai5 relative"
          welcomeContClass="welcome-content demo1 text-left"
          specialHeadClass="special-head gradient-text"
          text="Full NFT Marketplace with Smart Contract"
          ClassTitle="bold"
          title="Discover, Buy and Sell NFT Assets The Easy Way"
          ClassDummyText="w-text"
          dummyText="This is a Full NFT Marketplace built with smart contracts (Solidity, Web3, IPFS and React js) powered by Ethereum, it can be deployed on any ETH chain like Polygon, Binance Smart Chain. It is full platform where each user can mint his own NFT and expose it on a marketplace which work like Opensea and rarible."
          addRow={true}
        />

        <OurService
            ClassSec="our_services_area section-padding-100"
            titleTop="How Platform Works"
            titleDown="Start With Easy Steps"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
        />
        <div className="clearfix"></div>
        <div>
        {!collectionCtx.nftIsLoading && (
          <MintSection
              SecClass="special-mr section-padding-100"
              topTitle="Mint New NFT Item"
              downTitle="Mint NFT Now and List Your Creative NFT Digital Asset For Sale"
              topText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor iscing elit. Duis at dictum risus, non suscipit arcu."
              downText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur!"
          />
        )}
        {collectionCtx.nftIsLoading && <Spinner />}
        </div>

        {!marketplaceCtx.mktIsLoading && <NFTCollection ClassTextDIV="top-sec-h" />}
        {marketplaceCtx.mktIsLoading && <Spinner />}

        
        <div className="clearfix" />
        <ConnectWallet />
        <FooterPages
          mt0={true}
          text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad.'
        />

    </>
  );
};

export default Main;