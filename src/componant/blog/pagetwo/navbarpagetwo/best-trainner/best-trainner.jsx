import React from 'react'
import './best-trainner.css'
import Besttrainnercard from './Best-trainnercard'
export default function Besttrainner() {
  return (
    <div className='componant-padding'>

 
<div className="componantheader m-auto text-center">
          <div className=" textcolor fw-bold">
            <span className="headerspace"></span> COACHES
          </div>

          <h3 className="fs-2">BUILD YOUR BODY WITH OUT BRST TRAINERS </h3>
          <span className="headerspace"></span> 
          <p >Lorem ipsum, dolor sit amet consectetur tempora similique molestiae nostrum necessitatibus cum cumque a est molestias, modi fuga quis </p>
        </div>
        
<div className='d-flex mt-5   align-items-center justify-content-around flex-wrap'>
     
<Besttrainnercard bg={"bgfirst"}/>
<Besttrainnercard bg={"bgsecond"}/>
<Besttrainnercard bg={"bgthree"}/>



</div>

   
    </div>
  )
}
