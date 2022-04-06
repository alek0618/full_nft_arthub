const SectionHeading = ({addHome=false , title , ClassTextDIV="" , ClassTextH2="" , ClassTextP="" , text , textTop , textDown}) => {

  return (
  	<>
  		{addHome ? (

		      <div className="section-heading text-center">
		        <h2 data-aos="fade-up" data-aos-delay='300'>{text}</h2>
		        <p data-aos="fade-up" data-aos-delay='400'>Our Template will be a perfect platform for presenting You future Template. This Landing Page comes in clean design</p>
		      </div>

  		) : (

		      <div className="section-heading text-center">
		        <div className={ClassTextDIV} data-aos="fade-up">{title}</div>
		        <h2 className={ClassTextH2} data-aos="fade-up" data-aos-delay='300'>{textTop}</h2>
		        <p className={ClassTextP} data-aos="fade-up" data-aos-delay='400'>{textDown}</p>
		      </div>

  		)}
    </>
  );
}

export default SectionHeading;