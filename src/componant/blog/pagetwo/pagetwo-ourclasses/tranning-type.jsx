import React from 'react'
import { FaRunning, FaLongArrowAltRight } from "react-icons/fa";


import "./pagetwo-ourclasses.css"
export default function Tranning(props) {
  return (
    <div>
       <div className={`classbody  m-3 text-light ${props.background} `}>
              
              <span className="opacity-25">{props.text}</span>
              <h4>{props.h2} </h4>
              <hr className="w-75" />

              <span className="spancol">
                MORE INFO <FaLongArrowAltRight className="ms-5 fs-4" />{" "}
              </span>
            </div>
    </div>
  )
}
