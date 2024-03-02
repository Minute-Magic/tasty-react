import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

function Work() {
    const workInfoData = [
        {
          image: PickMeals,
          title: "Quality Assurance",
          text: "We uphold the highest standards of quality in every dish we serve, meticulously sourcing ingredients and maintaining strict hygiene protocols to guarantee a safe and enjoyable dining experience.",
        },
        {
          image: ChooseMeals,
          title: "Customizable Orders",
          text: "Tailor your meal to your liking with our customizable options, allowing you to create a dining experience that suits your preferences perfectly.",
        },
        {
          image: DeliveryMeals,
          title: "Good Fast Deliveries",
          text: "We prioritize speedy deliveries,From kitchen to your table in record time, our commitment to swift service means you'll never have to wait long for your delicious meal to arrive.",
        },
      ];
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How It Work</h1>
            <p className='primary-text'>
            we understand the importance of good service. Our friendly staff is here to ensure you have a pleasant dining experience from start to finish.
            </p>
        </div>
        <div className='work-section-bottom'>
            {workInfoData.map((data)=>(
                <div className='work-section-info' key={data.title}>
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt=''/>
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work