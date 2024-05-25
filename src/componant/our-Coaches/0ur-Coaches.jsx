import React from 'react';
import Coacheshome from '../pagethree/COACHES-HOME/Coacheshome';
import BestTrainnerPageThree from '../pagethree/best-trainner-pagethere/Best-Trainner-Page-Three';
import Homecard from '../pagethree/COACHES-HOME/homecard';
 
import Footer from '../footer/footer'
import Pricing from '../pagethree/pricing/pricing';

import TESTIMONIALHEADER from '../TESTIMONIAL/TESTIMONIALHEADER';
import Besttrainner from '../blog/pagetwo/navbarpagetwo/best-trainner/best-trainner';
const Coaches = () => {
  return (
    <div className='pagethree'>
      <Coacheshome/>
      <BestTrainnerPageThree/>
      <div className='mb-5'>
    
</div>
      <Homecard  bgimg={'bg-homepricing'}  head={"OUR PRICING"}  text={'Pages-Pricing'} /> 


      <Pricing/>

      <TESTIMONIALHEADER  bgimg={"bgimgcontainer"}/>

      <Besttrainner/>
      <Footer/>
    </div>
  );
}

export default Coaches;
