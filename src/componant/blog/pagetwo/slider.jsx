import React from 'react';
import imageone from "../../../images/large15.webp"
import imagetwo from "../../../images/large14.webp"
import imagethree from "../../../images/large12.jpg"
import { FaRunning} from "react-icons/fa";


import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';

import 'swiper/css/navigation';

import "./slider.css"

import {  Navigation } from 'swiper/modules';


const Slider = () => {



  return (



    <div  className='w-75 m-auto'>
 <Swiper
      
        navigation={true}
        modules={[ Navigation]}
  className='mt-5 mb-5'
      >
        <SwiperSlide><img src={imageone} alt='' /></SwiperSlide>
        <SwiperSlide><img src={imagetwo} alt='' /></SwiperSlide>
        <SwiperSlide><img src={imagethree} alt='' /></SwiperSlide>
        
      
      </Swiper>
<div className='d-flex justify-content-between  align-items-center flex-wrap'>
      <div className='home-page-two-under-side'>
<FaRunning className=' fs-1 me-3 iconcolor'/>
<div>
<h4>
  MORPI SODALES
</h4>
<p className='opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>

</div>
<div className='dashed'>
  
</div>
<div className='home-page-two-under-side'>
<FaRunning className='iconcolor fs-1 me-3'/>
<div>
<h4>
  MORPI SODALES
</h4>
<p className='opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>

</div>
<div className='dashed'>
  
</div>
<div className='home-page-two-under-side'>
<FaRunning className='iconcolor fs-1 me-3'/>
<div>
<h4>
  MORPI SODALES
</h4>
<p className='opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>

</div>
</div>
    </div>
  );
}

export default Slider;
