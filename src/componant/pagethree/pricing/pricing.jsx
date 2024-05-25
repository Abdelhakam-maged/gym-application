import React from 'react'
import Planscard from '../../TESTIMONIAL/planscard'

export default function Pricing() {
  return (
    <div className='componant-padding'>
       <div className="componantheader m-auto text-center">
          <div className=" textcolor fw-bold">
            <span className="headerspace"></span> PRICING
          </div>

          <h3 className="fs-2">CHECK OUR BEST PRICING TABLES & JOIN US </h3>
        </div>
        <div className="d-flex justify-content-center flex-wrap ">
        <Planscard  bgcolor={"whitebgcolor"}/>
        <Planscard bgcolor={"binkbgcolor"}/>
        <Planscard bgcolor={"whitebgcolor"}/>

               
    </div>
    </div>
  )
}
