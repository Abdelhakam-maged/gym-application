import React from 'react'
import Besttrainnercard from '../../blog/pagetwo/navbarpagetwo/best-trainner/Best-trainnercard'
import './Best-Trainner-Page-Three.css'
export default function BestTrainnerPageThree() {
  return (
    <div className=' componant-padding '>
              
<div className='d-flex mt-5   align-items-center justify-content-around flex-wrap bestTrainnerPageThree'>

     <Besttrainnercard bg={"bgfirst"}/>
     <Besttrainnercard bg={"bgsecond"}/>
     <Besttrainnercard bg={"bgthree"}/>
     <Besttrainnercard bg={"bgfour"}/>
     <Besttrainnercard bg={"bgfive"}/>
     <Besttrainnercard bg={"bgsix"}/> 
     
     
     </div>
    </div>
  )
}
