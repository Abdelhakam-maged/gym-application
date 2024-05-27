import React from 'react';

import Services from '../Activities/services/services';
import Homecard from '../our-Coaches/COACHES-HOME/homecard';
import OnlineTrainers from '../Activities/onlinetrainers/OnlineTrainers';
import Footer from '../footer/footer';

const ACTIVITIES = () => {
  return (
    <div className='pagethree'>
<Homecard bgimg={'bg-homeactivites'}  head={"HOME PRACTICE"}  text={'Pages-Practice'} nav={false}/>


  <Services/>

  <OnlineTrainers/>
  <Footer/>

  
    </div>
  );
}

export default  ACTIVITIES;
