import React from 'react';
import Navbar from '../navbar/navbar'
import Homesection1 from './homesection1';
import Classes from './classes/classes';
import TESTIMONIAL from '../TESTIMONIAL/TESTIMONIAL';
import COACHES from '../COACHES/COACHES';
import Table from '../table/table';
import ARTICLES from '../ARTICLES/ARTICLES';
import Footer from '../footer/footer';

const Home = () => {
  return (
    <div>
    <div className='bg-danger  homecontianer'>
    <Navbar/>
      <div className='center'>
      <div   className='text-center    text-light fs-3 '>MAKE YOUR</div>
      <div className='text-center  text-light body'>BODY</div>
      </div>
    </div>
    <Homesection1/>

    <Classes/>

    <TESTIMONIAL/>
    <COACHES/>
    <Table/>
    <ARTICLES/>
    <Footer/>
    </div>
  );
}

export default Home;
