import React from 'react'
import ChooseHoodies from '../Assets/choose-image.png'
import DeliveryHoodies from '../Assets/delivery-image.png'

const Work = () => {
  const WorkInfoData = [ 
      {
          image: ChooseHoodies,
          title: "Choose Hoodies",
          text: "Unique style with premium, high-quality fashion pieces that.",
      },
      {
          image: DeliveryHoodies,
          title: "Delivery Hoodies",
          text: "Unique style with premium, high-quality fashion pieces that.",
      }
  ];

  return (
      <div className='work-section-wrapper'>
          <div className="work-section-top">
              <p className="primary-subheading">Work</p>
              <h1 className="primary-heading">How it Works</h1>
              <p className="pimary-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Unde doloribus earum debitis eveniet facere voluptatibus, 
                  perspiciatis quo explicabo obcaecati rem.
              </p>
          </div>

          <div className="work-section-bottom">
              {WorkInfoData.map((data, index) => (  // Added index as key
                  <div key={index} className="work-section-info">
                      <div className="info-boxes-img-container">
                          <img src={data.image} alt={data.title} /> {/* Added alt for accessibility */}
                      </div>
                      <h2>{data.title}</h2>
                      <p>{data.text}</p>
                  </div>
              ))}
          </div>      
      </div>
  );
};

export default Work;
