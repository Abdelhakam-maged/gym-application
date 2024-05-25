import React from 'react'
import Besttrainnercard from '../../blog/pagetwo/navbarpagetwo/best-trainner/Best-trainnercard'

export default function OnlineTrainers() {
  return (
    <div className='componant-padding'>
      
   

          <h3 className="fs-2 text-center">ONLINE TRAINERS</h3>
    
      <div className='d-flex mt-5   align-items-center justify-content-around flex-wrap'>

   
     <Besttrainnercard bg={"bgfour"}/>
     <Besttrainnercard bg={"bgfive"}/>
     <Besttrainnercard bg={"bgsix"}/> 
     
     
     </div>
    </div>
  )
}
