import React from 'react'

import { IoMdHappy, IoMdPerson } from "react-icons/io";

import { IoBarbell } from "react-icons/io5";
import { FaRunning, FaLongArrowAltRight } from "react-icons/fa";
import "./fitenssicon.css"
const fitenssicon = [
    { icon: <IoMdHappy />, num: "437 " },
    { icon: <FaRunning />, num: "235" },
    { icon: <IoMdPerson />, num: "44" },
    { icon: <IoBarbell />, num: "745" },
  ];
export default function Fitenssicon(props) {
  return (
    <div>
        <div className={`${props.contanerclass}`}>
        <div className={`d-flex justify-content-center text-center flex-wrap ${props.bodyclass}`}>
          {fitenssicon.map((item) => {
            return (
              <div key={Math.random()} className="fs-1 m-5 ">
              <span className={`${props.iconclass}`}> {item.icon}</span> 
                <span className={`d-block  ${props.texcol}`}>{item.num}</span>
              </div>
            );
          })}
        </div>

        </div>
    </div>
  )
}
