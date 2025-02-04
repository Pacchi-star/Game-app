import React from 'react'
import hoodies4 from '../Assets/hood4.png';
import hoodies7 from '../Assets/hood7.png';
import hoodies3 from '../Assets/hood3.png';

const ClothPhotos = () => {
  return (
<>
<div className='about-sectio-container'>



<div className="ClothFirst">
   <img src={hoodies7} alt='' />
</div>

<div className="ClothFirst">
   <img src={hoodies3} alt='' />
</div>

<div className="ClothFirst">
   <img src={hoodies4} alt='' />
</div>


</div>






{/* <div className='about-sectio-container'>

<div className="ClothFirst">
   <img src={hoodies} alt='' />
</div>

<div className="ClothFirst">
   <img src={hoodies} alt='' />
</div>

<div className="ClothFirst">
   <img src={hoodies} alt='' />
</div>

<div className="ClothFirst">
   <img src={hoodies} alt='' />
</div>



</div> */}
</>
  )
}

export default ClothPhotos;
