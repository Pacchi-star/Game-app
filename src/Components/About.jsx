import React from 'react';
import AboutBackground from '../Assets/about-background.png';
import AboutImage from '../Assets/hoodies1.jpg';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
// import { DefaultPlayer as Video } from 'react-html5video';
// import GoatVideo from '../Assets/GoatVideo.mp4';


const About = () => {

    const navigate = useNavigate();

    // const playVideo = () => {
    //     <Video autoPlay loop>
    //         <source src={GoatVideo} type="video/webm" />
    //     </Video>
           
    // } 


    return( 
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">

                <img src={AboutImage} className="about-image-hoodies" alt="" />
            </div>
            <div className="about-section-text-container">
                <p className='primary-subheading'>About </p>
                    <h1 className="primary-heading">
                        Hoodies is important part of our lifeStyle.
                    </h1>
                    <p className="primary-text">
                    [GOAT-Hoodies], we believe that style is not just about clothing—it's 
                    about expression, confidence, and individuality. Our mission is to empower men to embrace 
                    their unique style with premium,high-quality fashion pieces that blend timeless sophistication 
                    with modern trends.
                    </p>

                    <div className="about-buttons-container">
                        <button className="secondary-button" onClick={() => navigate('/')}> <FiArrowLeft />Back </button>
                       <button className="secondary-button">Learn More</button>
                       <button className="watch-video-button" onClick={() => playVideo()} ><BsFillPlayCircleFill /> Watch Video</button>
                    </div>

                    

                   
            </div>
         
        </div>

    )
}

export default About;
