import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'

const Contact = () => {

const navigate = useNavigate();


  return (
    <div className='contact-page-wrapper'>
      <h1 className='primary-heading'>Have Question In Mind?</h1>
      <h1 className='primary-heading'>Let Us Help You.</h1>
      <div className="contact-form-container">
        <input  type='text' placeholder='Ask me here'/>
         <button className="secondary-button" onClick={() => navigate("/")}>
                       <FiArrowLeft /> Back
         </button>
        <button className="secondary-button"onClick={() => navigate()}>Submit <FiArrowRight /></button>

      </div>

    </div>
  )
}

export default Contact
