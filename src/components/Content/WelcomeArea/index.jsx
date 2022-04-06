import "./welcome.css"

import WelcomeAreaInfo from "../../../data/data-components/data-WelcomeArea.js"

const WelcomeArea = ({
    ClassSec,
    welcomeContClass,
    specialHeadClass,
    text,
    ClassTitle,
    title,
    ClassDummyText="",
    dummyText,
    addRow=false
  }) => {

    return (

      <section className={ClassSec} id="home">
  
        <div class="moving-bg"></div>
        <div className="hero-section-content">
          <div className="container ">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 col-md-12">
                <div className={welcomeContClass}>
                  <div className="promo-section">
                    <h3 className={specialHeadClass}>{text}</h3>
                  </div>
                  <h1 className={ClassTitle} data-wow-delay="0.2s">{title}</h1>
                  <p className={ClassDummyText} data-wow-delay="0.3s">{dummyText}</p>
                  <div className="info-btn-group fadeInUp" data-wow-delay="0.4s">
                    <a href="pricing.html" className="btn info-btn">get started</a>
                    <a href="about-us.html" className="btn info-btn ml-30"> learn more</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-12">
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default WelcomeArea