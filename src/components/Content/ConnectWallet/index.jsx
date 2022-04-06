import InfoComponent from '../InfoComponent'
import FeaturesList from './FeaturesList'
import ImageBox from './ImageBox'

import "./ConnectWallet.css"

const ConnectWallet = () => {

  return (
	<section className="features section-padding-0-100 ">

		<div className="container">
			<InfoComponent
				titleSm='Connect Your Wallet'
				titleLg='Connect Wallet'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
			/>
			
			<div className="row">

				<FeaturesList />

				<ImageBox />
				
			</div>
		</div>
	</section>
  );
}

export default ConnectWallet;