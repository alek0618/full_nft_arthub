import OurServiceContent from "../../../data/data-components/data-OurService.js"
import SectionHeading from "../SectionHeading"

import "./service.css"

const OurService = ({
	ClassSec,
	titleTop,
	titleDown,
	text
	
}) => {

    return (

      <section className={ClassSec}>
        <div className="container">
          <div className="row">

              <SectionHeading
                title={titleTop}
                textTop={titleDown}
                textDown={text}
                ClassTextDIV="top-sec-h"
                ClassTextH2="d-blue bold"
                ClassTextP="w-text"
              />
            <div className="col-12 col-md-12 col-lg-12 mt-s">
              <div className="row">
              	{OurServiceContent && OurServiceContent.map((item , key) => (
	                <div className="col-12 col-md-6 col-lg-3" key={key}>
	                  {/* Content */}
	                  <div className="service_single_content text-center mb-100">
	                    {/* Icon */}
	                    <div className="service_icon max">
	                      <img src={item.img} alt="" />
	                    </div>
	                    <h6 className="w-text bold">{item.title}</h6>
	                    <p className="g-text">{item.text}</p>
	                  </div>
	                </div>
              	))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );  

}

export default OurService