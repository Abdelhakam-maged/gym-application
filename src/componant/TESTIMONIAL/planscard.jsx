import React from 'react'

import './TESTIMONIAL.css'
import { FaStar,FaCheck } from "react-icons/fa";


export default function Planscard(props) {
   const  icons= [
        <FaCheck />,
        <FaCheck />,
        <FaCheck />,
      ]
  return (
    <div>
      <div  className={` text-center  m-4  ${props.bgcolor}`}>
                <h5>PRO PLAN</h5>
                <p>HERE GOES SOME DESCRIBTION</p>
                <span className="fs-3   mb-3 ">$15 monthly</span>
               {
                icons.map((item) => {
                    return <div className="mt-3 " key={Math.random()}>
          {item}
                <span className="ms-3">chick</span>    
                  </div> 
                       })
                    }
                  <button className="mt-3">MORE INFO</button>
                  </div>
    </div>
  )
}
