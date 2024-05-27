import React from 'react';
import "./whow-we-are.css"
import { LuDot } from "react-icons/lu";

import imageone from "../../../../images/imagesix.jfif"

import imagetwo from "../../../../images/images (2).jfif";
const WhowWeAre = () => {
  return (
    <div  className="  whowweare  componant-padding ">

<div className=" juscontant    m-0 p-0">
        <div className='lift-side'>
          <div className=" textcolor fw-bold  ">
            <span className="aboutspace m-1 "></span> WHOW WE ARE
          </div>
          <div className="fw-bold fs-2 ">WANT TO TRUST US?</div>
          <div className="  fw-bold fs-2 d-inline  ">
          
            GET KNOW WITH US
          </div>
      
          <p className="pargcolor ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam labore deleniti vitae minima, tempora similique molestiae nostrum necessitatibus cum cumque a est molestias, modi fuga quis consequuntur dolorum omnis error!</p>
    <div className=' '>
      <LuDot className='fs-2 text-color'/> here goes some
    </div>
      <div>
      <LuDot className='fs-2 text-color'/> here goes some
    </div>
    <div className='buttons mt-3'>
      <button className='me-3 text-color '>CALL US</button>
      <button className='text-color'>LEARN MORE</button>
    </div>
      </div>
<div  className='right-side'>
  <img src={imageone} alt="" className='imageone' />
  <img src={imagetwo} alt=""  className='imagetwo'/>
  </div>
    
    </div>
    </div>
  );
}

export default WhowWeAre;
