import React from 'react'

import { FaLongArrowAltRight } from "react-icons/fa";

import "./ARTICLESCARD.css"
export default function ARTICLESCARD(props) {
  
  return (
    <div>
      


              <div  className="arcwidth m-3  ">
                <img src={props.imgsrc}  alt="a" className="coachesimage" />
              
                <h5 className="mt-5">  WALTER WHITE</h5>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et  </p>

                <span className=' arcunderside'>FEB 12, 2020 <div> MORE INFO <FaLongArrowAltRight className='fs-4'/></div></span> 
              </div>
          
       
            

    </div>
  )
}
