import React from 'react';
import Navbar from './Navbar';
// import BannerBackground from '../Assets/home-banneer-background.png';
// import BannerImage from '../Assets/BannerImage.png';
 import BannerBackground from '../Assets/home-banner-background.png';
 import BannerImage from '../Assets/hoodies2.jpg';
import {FiArrowRight} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import GoatVideo from '../Assets/GoatVideo.mp4';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="home-container">
        <Navbar/>
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground}  alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
              Your Favourite Hoodies 
            </h1>
            <p className='primary-text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, pariatur?
            </p>
            <button className="secondary-button" onClick={() => navigate("/ProductDetails")}>
              Order now <FiArrowRight />
            </button>
          </div>
          <div className="home-image-container">
            <img src={BannerImage} className='hoodImg' alt="" />
          </div>
        </div>

        <div className="video-full">
        <video autoPlay loop muted>
          <source src={GoatVideo}  type="video/mp4" />
        </video>
        </div>
    </div>

    
  );
};

export default Home
