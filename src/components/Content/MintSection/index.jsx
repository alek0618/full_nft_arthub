import { useContext } from 'react';
import {CreativeSolutionsAboutSec} from "../../../helpers/allImgs"
import MintForm from '../MintNFT/MintForm';
import CollectionContext from '../../../store/collection-context';
import Spinner from '../../Layout/Spinner';


const CreativeSolutions = ({
  SecClass,
  topTitle,
  downTitle
}) => {

  const collectionCtx = useContext(CollectionContext);

    return (

      <section className={SecClass}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 offset-lg-3 col-md-10 offset-md-1">
              <div className="who-we-contant mt-s text-center">
                <div className="top-sec-h" data-aos="fade-up">{topTitle}</div>
                <h3 className="w-text mb-30" data-aos="fade-up">{downTitle}</h3>
                {!collectionCtx.nftIsLoading && <MintForm />}
                {collectionCtx.nftIsLoading && <Spinner />}
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default CreativeSolutions