import React from 'react'
import Logo from '../Assets/Goat_Main.jpg'
import { BsTwitter } from 'react-icons/bs'
import { SiLinkedin } from 'react-icons/si'
import { BsYoutube } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => { 

  return (
    <div className='footer-wrapper'>
        <div className="footer-section-one">
            <div className='footer-logo-container'>
                <img src={Logo} alt=''/>
                <h2 className="footNavlogo">GO<span>AT</span></h2>
            </div>
            <div className="footer-icons">
                <a href=""><BsTwitter /></a>
                <a href=""><SiLinkedin/></a>
                <a href=""> <BsYoutube /></a>
                <a href=""><FaFacebookF/></a>
                <a href="https://www.instagram.com/_g.o.a.t_india_/"><FaInstagram/></a>
            </div>
        </div>

        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Carrers</span>
                <span>Work</span>
            </div>
            <div className="footer-section-columns">
                <span>420-120-100108</span>
                <span>Namaste@Hoodies.com</span>
                <span>BTM-layout Banglore</span>
                <span>Banglore-560049</span>
                <span>92287352038</span>
            </div>
        </div>
      
    </div>
  )
}

export default Footer;
