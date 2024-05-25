import React from 'react'


import { IoCallOutline } from "react-icons/io5";
import { IoMdLocate } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import './Contactus.css'
export default function Contactus() {
  return (
    <div className='componant-padding'>
      <div className='d-flex  justify-content-around  flex-wrap'>

<div className='contact-header mt-5'>
<div >
          <div className=" textcolor fw-bold text-center">
            <span className="headerspace"></span> About us
          </div>

          <h3 className="fs-3 ">DONT AFRAID TO CONTACT US </h3>
          <hr className='w-25 '/>
        </div>
<div className='d-flex align-items-center   '>
    <CiMail className='fs-3 binkcolor text-center'/>
    <div className='ms-5' >
    <p className='m-0'>mike.rachards@gmail.com</p>
    <span>mike.rachards@gmail.com</span>
    </div>
</div>
<div className='d-flex align-items-center  mt-4'>
    <IoMdLocate className='fs-3 binkcolor'/>
    <div className='ms-5' >
    <p className='m-0'>Address :  NYC,united states</p>
    <span>Address :  london,united states</span>
    </div>
</div>
<div className='d-flex align-items-center mt-4'>
    <IoCallOutline className='fs-3 binkcolor'/>
    <div className='ms-5' >
    <p className='m-0'>(212)328-1055</p>
    <span>(188)029-3162</span>
    </div>
</div>
</div>
<div className='contact-form'>
<div className=" ms-5 mt-5  ">
          <div className=" textcolor fw-bold">
            <span className="headerspace"></span> Contact us
          </div>

          <h3 className="fs-2 text-light">SEND YOUR QUESTIONS! </h3>
        
        </div>
<div className=" ms-5 mt-5  ">
    <input type="text" placeholder="FULL NAME" className=' me-5 '/>
    <input type="text" placeholder="EMAIL" className='mt-3'/>
    <input type="text" placeholder="PHONE" className='me-5 mt-3'/>
    <input type="text" placeholder="SUBJECT" className='mt-3'/>
    <input type="textarea" placeholder="MASSAGE" className=' mt-3'/>
   
</div>
<button className='mt-4 ms-5 ps-4 pe-4'>SEND EMAIL</button>
</div>
      </div>

    </div>
  )
}
