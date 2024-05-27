import React, { useEffect, useState } from 'react';
import { IoBarbell } from "react-icons/io5"; 
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

const pages=[
  {id:1,name:'HOME',to:""},
  {id:2,name:'ACTIVITIES' ,to:"Activities"},
  {id:3,name:'OUR SHOP', to:"ourshop"},
  {id:4,name:'WHO WE ARE',to:"whoweare"},
  {id:5,name:'COACHES' ,to:"coaches"},
 
  {id:6,name:'CONTACT' ,to:"contact"},
]




const Navbarsectiontwo = (props) => {
  const [curPage,setCurPage] = useState("")
  
  const location=useLocation()
  const curLocation=location.pathname.split("/")[1]

console.log(curLocation)



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
          {pages.map((item,index)=>{
            return <div key={Math.random()}>
            <Link   className={`link-underline-light link-underline-opacity-0 text-light ${ curLocation.toLowerCase() === item.to.toLowerCase() ? "active" : ""}`} to={`/${item.to}`}>{item.name}</Link>
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
