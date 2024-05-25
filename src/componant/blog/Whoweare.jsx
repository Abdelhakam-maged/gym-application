import React from 'react';
import Navbarsectiontwo from '../navbar/navbarsectiontwo';

import { IoSearch } from "react-icons/io5";

import './Whoweare.css'
import Slider from './pagetwo/slider';
import BodyMissIndex from './pagetwo/body-miss-index';
import Whowearepagetwo from './pagetwo/who-we-are-pagetwo/who-we-are-pagetwo';
import Besttrainner from './pagetwo/navbarpagetwo/best-trainner/best-trainner';
import TESTIMONIALHEADER from '../TESTIMONIAL/TESTIMONIALHEADER';
import Navbarresponsive from '../navbar/navbarresponsive';
import WhowWeAre from "./pagetwo/whow-we-are/whow-we-are"; 
import PagetwoOurclasses from './pagetwo/pagetwo-ourclasses/pagetwo-ourclasses';
import ARTICLESPAGETWO from './pagetwo/ARTICLESPAGETWO/ARTICLESPAGETWO';
import Footer from '../footer/footer';
const Whoweare = () => {
  return (
    <div className='pagetwo'>
    <div className='homepagetwo'>
<Navbarsectiontwo bgcontainer={"navb"} bglogo={"bg-logo"} icon={<IoSearch className='text-light fs-4'/>  } />


<Navbarresponsive/>
      <div>
        <Slider/>
      </div>

    </div>
    <WhowWeAre/>
    <PagetwoOurclasses/>
    <BodyMissIndex/>
    <Whowearepagetwo/>
    
    <Besttrainner/>
<TESTIMONIALHEADER />
    <ARTICLESPAGETWO/>
    <Footer/>
    </div>
  );
}

export default Whoweare;
