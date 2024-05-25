import React from 'react'
import { GoArrowSwitch } from "react-icons/go";
import { FaStar,FaCheck } from "react-icons/fa";
import image1 from "../../images/images (1).jfif"
export default function TESTIMONIALHEADER(props) {
  return (
    <div className={`  ${props.bgimg}`}>
       <div className="container testimonial p-3 ">
        <div className="d-flex">
          <div className="  text-light text-center w-25 m-0">
            <div className=" textcolor fw-bold">
              <span className="headerspace"></span> TESTIMONIAL
            </div>

            <h3 className="fs-2">WHAT PEOPLE SAY ABOUT US & OUR CLASSES </h3>
          </div>
          <div className=" testimonialheader ">
            <img src={image1} alt=" " />
            <div className="ms-3">
              <h5 className="mb-2">ALEX MORGAN</h5>
              <FaStar className=" mb-2 starcolor" />
              <FaStar className="starcolor ms-2 mb-2" />
              <FaStar className="starcolor ms-2 mb-2" />
              <FaStar className="text-light ms-2 mb-2" />
              <FaStar className="text-light ms-2 mb-2" />
            </div>
            <p className="text-light">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata{" "}
            </p>
          </div>
        </div>
        <div className="pagenumber ">
          <p className="text-light m-0">01</p>
          <GoArrowSwitch className="text-light" />
        </div>
      </div>
    </div>
  )
}
