
import React, { useState } from 'react';
import { IoBarbell,IoCloseSharp} from "react-icons/io5"; 

import { Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci"

const pages=[
  {name:'HOME',to:""},
  {name:'ACTIVITIES' ,to:"Activities"},
  {name:'OUR SHOP', to:"ourshop"},
  {name:'WHO WE ARE',to:"whoweare"},
  {name:'COACHES' ,to:"coaches"},
 
  {name:'CONTACT' ,to:"contact"},
  
]


const Navbarresponsive = (props) => {

    const [show,setshow]=useState(false)
 
    const showlist=()=>{
      
      if(show===false){
      setshow(true)
    
      }
      else{
        setshow(false)
        
      }
    
      
    }
  return (
  
  
    

    <div className='navresponsefcontaner'>
      
    <div className={`d-flex   justify-content-between align-items-center p-3 m-0 ${props.bg}`}>
      <div className='  text-light'>

   <IoBarbell className='w-100'/>

      
        <span className='d-block text-center logo '>
        ANGEL FIT
        </span>
      </div>
      
      <div className='  text-light'>
{ show?<IoCloseSharp onClick={showlist} className='fs-1 '/>:<CiMenuBurger onClick={showlist} className='fs-1 '/>}
        
      </div>
    </div>
    {
  show?<div className='     d-flex justify-content-end  '>
        <div className='  bg-dark  p-0 w-50  items   '>
          {pages.map((item)=>{
            return <div  className='m-0 pt-3 pb-3 m-auto  text-center '>
            <Link className=' link-underline-light link-underline-opacity-0 text-light  '   to={`/${item.to}`}>{item.name}</Link>
          </div>
          })}
          
        
        </div>
      </div>
: ""}
    </div>
  );
}

export default Navbarresponsive;
