import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,

} from "react-icons/fa";
import imageone from '../../../images/imagethree.jfif'
import "./Alexphoecix.css";
export default function Alexphoecix() {
  return (
    <div className=" m-auto componant-padding">
      <div className="d-flex  justify-content-sm-around flex-wrap">
        <div className="firstside mt-5">
    <img src={imageone} alt=""/>
          <div className="blackman pb-3">
            <h6 className="pt-4 ms-3">ROSS BLACKMAN</h6>
            <span className="pb-5 ms-3">BodyBuilding Coach</span>
            <p className="pt-2 ms-3">
              {" "}
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>

            <span className="ms-3 ">
              <FaFacebook /> <FaInstagram /> <FaLinkedin />{" "}
            </span>
          </div>
        </div>

        <div className="secondside mt-5">
          <h6>SUMMERY</h6>
          <p>
            Here you can use rows and columns to organize your footer content.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Here you
            can use rows and columns to organize your footer content. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
<div className="d-flex  justify-content-between binkcolor">
    <h4>BULDING</h4>
    <span>90%</span>
</div>
          <div
              className="progress "
              role="progressbar"
              aria-label="Basic example"
            >
              <div className="progress-bar"></div>
            </div>
            <div className="d-flex  justify-content-between binkcolor mt-5">
    <h4>WEIGHTLIFTING</h4>
    <span>75%</span>
</div>
          <div
              className="progress "
              role="progressbar"
              aria-label="Basic example"
            >
              <div className="progress-bar w-75"></div>
            </div>

            <div className="d-flex  justify-content-between binkcolor mt-5">
    <h4>RUNNING</h4>
    <span>90%</span>
</div>
          <div
              className="progress "
              role="progressbar"
              aria-label="Basic example"
            >
              <div className="progress-bar"></div>
            </div>

<div className="mt-5 contact">
    <h5>CONTACT ME</h5>
<input type="text" placeholder="FULL NAME" className="fullname"/>
<input type="text" placeholder="EMAIL" />
<input type="textarea" placeholder="MASSAGE" className="w-100 mt-3 "/>

<button className="mt-4 binkcolor pe-4 ps-4">SEND</button>
</div>
            
        </div>
      </div>
    </div>
  );
}
