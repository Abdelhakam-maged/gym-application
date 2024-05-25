import React from "react";
import "./aboutus.css";
import { FaRunning, FaLongArrowAltRight } from "react-icons/fa";
import image1 from "../images/image1.jfif";
const Aboutus = () => {
  return (
    <div className=" juscon align-items-center">
      <div className=" ps-5 mt-5 about   p-5">
        <div className=" textcolor fw-bold ">
          <span className="aboutspace"></span> ABOUT US
        </div>
        <div className="fw-bold fs-2 text-light">Nulla id</div>
        <div className="  fw-bold fs-2 d-inline text-light ">
          {" "}
          ACCUMSAN ERAT
        </div>{" "}
        <span className="aboutspace ms-2 mb-3 "></span>
        <p className="pargcolor">Lorem ipsum dolor sit amet, consetetur .</p>
        <div className="aboutbody">
          <div className="  m-3">
            <div className="d-flex mt-5  ">
              <div>
                <FaRunning className="abouticon fs-2 mb-4 me-3 d-inline" />
              </div>
              <div>
                <span className="text-light  ">GYM</span>
                <div className="text-light  ">Morbi sodales</div>
              </div>
            </div>
            <hr className="text-light" />
            <div className="d-flex  aboutbutt">
              <p className="text-light phrgsize">
                consetetur sadipscing elitr, sed diam nonumy eirmod{" "}
              </p>
              <button className="d-inline  ">READ MORE</button>
            </div>
          </div>

          <div className="m-3  ">
            <div className="d-flex mt-5 ">
              <div>
                <FaRunning className="abouticon fs-2 mb-4 me-3 d-inline" />
              </div>
              <div>
                <span className="text-light  ">GYM</span>
                <div className="text-light  ">Morbi sodales</div>
              </div>
            </div>
            <hr className="text-light " />
            <div className="d-flex  aboutbutt">
              <p className="text-light phrgsize">
                consetetur sadipscing elitr, sed diam nonumy eirmod{" "}
              </p>
              <button className="d-inline  ">READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className=" underside ">
        <div className="rightside  mt-5">
          <div className="smallbox">
            <p>WANY TO PRACTICE AT HOME ?</p>
            <span>click here</span> <FaLongArrowAltRight />
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Aboutus;
