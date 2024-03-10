/* eslint-disable react/no-unescaped-entities */
import './WhyUs.css'
import imgComplexity1 from '../../assets/roast-img-complexity.png'
import imgComitment2 from '../../assets/beans-img-commitment.png'
import imgGlance2 from '../../assets/v60-img-glance.png'

const WhyUs = () => {


    return (
        <>
            <div className="whyUsContainer" id='about'>
                <h1 className='whyus'>Why Us?</h1>
                <div className='smallerContainer'>
                <div className="leftContainer">
                    <div className="title">
                        PRODUCT
                    </div> 
                </div>
                    <div className="bodyOf">
                        <div className='h1'>Complexity</div>
                        <p> A solid and complex taste of coffee.
                            We determined our product as one of those that emphasizes quality over others.
                            We also provide a custom of your preference of blend, often called 'house-blend', 
                            and we also had a special robusta product
                            'Pupuan' - Robusta, that has a creamy cinnamon taste
                        </p>
                       <div className="images-section">
                       <div className='wrapperimg'><img className='whyUsImg' src={imgComplexity1} alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className='smallerContainer'>
                <div className="leftContainer">
                    <div className="title">
                        MISSION
                    </div> 
                </div>
                    <div className="bodyOf">
                        <div className='h1'>Commitment</div>
                        <p> Dedicated in the plantation products industry. With the commitment to quality, sustainability,
                             and innovation, we continuing to evolve bring out the creativity in the world of plantation.
                              Committed to utilize the agricultural practices with responsibly and sustainably 
                              to develop a high quality products and also preserve the environment.
                        </p>
                         <div className="images-section">
                         <div className='wrapperimg'><img className='whyUsImg' src={imgComitment2} alt="" /></div>
                        </div>
                        
                    </div>
                </div>
                <div className='smallerContainer'>
                <div className="leftContainer">
                    <div className="title">
                        US
                    </div> 
                </div>
                    <div className="bodyOf">
                        <div className='h1'>Glance</div>
                        <p> Specialists in our field for quality measurement, product development,
                             and customer satisfaction as a key of an aesthetic arsitecture of a flavour. 
                            Is a must for us to deliver the best for our customers. Through us, experience the flavor exotism of bali
                        </p>
                        <div className="images-section">
                        <div className='wrapperimg'><img className='whyUsImg' src={imgGlance2} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUs