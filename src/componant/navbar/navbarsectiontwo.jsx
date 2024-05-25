import React from 'react';
import { IoBarbell } from "react-icons/io5"; 
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const pages=[
  {name:'HOME',to:""},
  {name:'ACTIVITIES' ,to:"Activities"},
  {name:'OUR SHOP', to:"ourshop"},
  {name:'WHO WE ARE',to:"whoweare"},
  {name:'COACHES' ,to:"coaches"},
 
  {name:'CONTACT' ,to:"contact"},
]

const Navbarsectiontwo = (props) => {
  return (
    <div className={`m-0 ${props.bgcontainer}`}>
      <div className={`col-1 pt-2 text-light ${props.bglogo}`}>
        <IoBarbell className='w-100 text-center'/>
        <span className='d-block text-center logo '>
        ANGEL FIT
        </span>
      </div>
      <div className={`col-8 p-0 ${props.bglinks}`}>
        <div className='d-flex align-items-center justify-content-between navlist-width  m-auto   p-4'>
          {pages.map((item)=>{
            return <div key={Math.random()}>
            <Link className='  link-underline-light link-underline-opacity-0 text-light '  to={`/${item.to}`}>{item.name}</Link>
          </div>
          })}
          
        {props.icon}
        </div>
      </div>
      <div className='col-3 mt-4  text-light'>
        <span className='d-block text-center'>GET STARTED FOR FREE <IoIosArrowForward className='opacity-25'/> <IoIosArrowForward className='opacity-50'/> <IoIosArrowForward className='opacity-75'/> </span>
      </div>
    </div>
  );
}

export default Navbarsectiontwo;
