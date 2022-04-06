import ConnectWalletIconswallet from "../../../../assets/img/icons/wallet.png"

// import whoWeData from './data.json'
import {whoWeData} from '../../../../data/data-containers/data-whoWe.js'

const FeaturesList = () => {

  return (
    <>
	    <div className="service-img-wrapper col-lg-5 col-md-12 col-sm-12 no-padding-right">
	        <div className="features-list">
	            <div className="who-we-contant text-center">
	                <img src={ConnectWalletIconswallet} className="mb-15" width="90" alt="" />
	                <h4 className="w-text mb-30 text-center" data-wow-delay="0.3s">Start collecting, Buying and Selling NFTs with simple and easy steps.</h4>
	                {whoWeData && whoWeData.map((item , i) => (
	                    <div key={i} className="pricing-item v2">
	                        <img src={item.img} width="30" className="wal-icon mr-3" alt="" />
							<span className="w-text ml-3">{item.text}</span>
	                    </div>                            	
	                ))}
	            </div>
	        </div>
	    </div>
    </>
  );
}

export default FeaturesList;