import React, { useState } from 'react'
import Navbarsection1 from '../../navbar/navbarsection1'
import Navbarsectiontwo from '../../navbar/navbarsectiontwo'
import '../../../componant/blog/Whoweare.css'
import "./Coacheshome.css"
import Navbarresponsive from '../../navbar/navbarresponsive'
import { IoSearch } from "react-icons/io5";
export default function Homecard(props) {

  const [shownav,setshownav]=useState(props.nav)



  return (
    <div className={`${props.bgimg}`}>
      <div className={`${props.bgimgResponsive}`}>
{
  shownav?<div >
   <Navbarsection1/>
   <Navbarsectiontwo bgcontainer={"navsec2container"} bglinks={"bg-dark"}/>
   <Navbarresponsive  bg={"bg-dark"}    />
   </div>:<div > 
   <Navbarsectiontwo bgcontainer={"navb"} bglogo={"bg-logo"} icon={<IoSearch className='text-light fs-4'/>  } />
<Navbarresponsive/>
   </div>
}
<div className='text-light  home-body'>
    <h3>{props.head}</h3>
    <span>{props.text}</span>
</div>
</div>
    </div>
  )
}
