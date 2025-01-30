import React from 'react'
import GoatFisrt from '../Assets/1-Goat.png';
import GoatSecond from '../Assets/2-Goat.png';
import GoatThird from '../Assets/3-Goat.png';
import GoatFisrt1 from '../Assets/1 Goat.png';
import GoatSecond2 from '../Assets/2 Goat.png';
import GoatThird3 from '../Assets/3 Goat.png';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';


const ProductDetails = () => {

const navigate = useNavigate();

  return (
<>
<h1 className='hoodiesHeading'>Hoodies Collections</h1>
 <div className=" slideImage">


<div className="Slider">
           <div className="slides">
                    <input type='radio' name="radio-btn" id="radio1" />
                    <input type='radio' name="radio-btn" id="radio2" />
                    <input type='radio' name="radio-btn" id="radio3" />

                    <div className="slide First">
                        <img src={GoatFisrt} alt='' />
                    </div>
                    <div className="slide">
                        <img src={GoatSecond} alt='' />
                    </div>
                    <div className="slide">
                        <img src={GoatThird} alt='' />
                    </div>
    
            </div>

            <div className="navigation-manual">
                <label for="radio1" className="manual-btn"></label>
                <label for="radio2" className="manual-btn"></label>
                <label for="radio3" className="manual-btn"></label>
            </div>
     </div>


     <div className="Slider">
           <div className="slides">
                    <input type='radio' name="radio-btn" id="radio4" />
                    <input type='radio' name="radio-btn" id="radio5" />
                    <input type='radio' name="radio-btn" id="radio6" />

                    <div className="slide First">
                        <img src={GoatFisrt1} alt='' />
                    </div>
                    <div className="slide">
                        <img src={GoatSecond2} alt='' />
                    </div>
                    <div className="slide">
                        <img src={GoatThird3} alt='' />
                    </div>
    
            </div>

            <div className="navigation-manual">
                <label for="radio4" className="manual-btn"></label>
                <label for="radio5" className="manual-btn"></label>
                <label for="radio6" className="manual-btn"></label>
            </div>
     </div>
       
</div>
<div className='price'>
    <div className="finalprice">
        <h3>MRP - 6000.00 rs<br/> Discount Price - 4000.00 rs</h3>
    </div>
    <div className="finalprice">
        <h3 className='strach'>MRP - 6000.00 rs<br/> </h3><h3>Discount Price - 4000.00 rs</h3>
    </div>

</div>

<br/>
<br/>

<div className="TColumn">
        <table className='tableColumn'>
                <tr>
                  <th colSpan="2" className='tableHead'>Product Description</th>
               </tr>

               <tr>
                <td className='thr'>Made of</td>
                <td>Fleece</td>
               </tr>

               <tr>
                <td className='thr'>Neck Type</td>
                <td>Hooded</td>
               </tr>

               <tr>
                <td className='thr'>Fit Type</td>
                <td>Regular Fit</td>
               </tr>

               <tr>
                <td className='thr'>Color</td>
                <td>Off White, light Green</td>
               </tr>

               <tr>
                <td className='thr'>Pattern</td>
                <td>Plain</td>
               </tr>

               <tr>
                <td className='thr'>Sleeve Type</td>
                <td>Full Sleeve</td>
               </tr>

               <tr>
                <td className='thr'>Care Instruction</td>
                <td>Machine Washable</td>
               </tr>

               <tr>
                <td className='thr'>Available Sizes</td>
                <td>S, M, L, XL</td>
               </tr>

               <tr>
                <td className='thr'>BNG</td>
                <td>BNG423BBP46L</td>
               </tr>
 
                <tr>
                    <td className='thr'> Country of Origin</td>
                    <td>India</td>
                </tr>
           

               </table>    

              
</div>
<div className="Product-btn">

                 <button className="secondary-button" onClick={() => navigate('/')}>
                 <FiArrowLeft /> Back
                 </button>
              <a href="https://wa.me/9611477056?text=Hello, Can you please take my Order ?">
              <button className="secondary-button">
                              Booking <FiArrowRight />
                 </button>
              </a>

</div>

</>
  )
}

export default ProductDetails
