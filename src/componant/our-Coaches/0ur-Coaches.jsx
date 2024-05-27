import React from 'react';
import Coacheshome from './COACHES-HOME/Coacheshome';
import BestTrainnerPageThree from './best-trainner-pagethere/Best-Trainner-Page-Three';
 
import Footer from '../footer/footer'
import Pricing from './pricing/pricing';

import TESTIMONIALHEADER from '../TESTIMONIAL/TESTIMONIALHEADER';
import Besttrainner from '../blog/pagetwo/navbarpagetwo/best-trainner/best-trainner';
const Coaches = () => {
  return (
    <div className='pagethree'>
      <Coacheshome/>
      <BestTrainnerPageThree/>
      <div className='mb-5'>
    
</div>
  


      <Pricing/>

      <TESTIMONIALHEADER  bgimg={"bgimgcontainer"}/>

      <Besttrainner/>
      <Footer/>
    </div>
  );
}

export default Coaches;
