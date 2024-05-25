import React from "react";
import imageone from "../../../../images/imagefour.jfif";
import imagetwo from "../../../../images/imagefive.jfif";
import imagethere from "../../../../images/imagesix.jfif";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./who-we-are-pagetwo.css";
export default function Whowearepagetwo() {
  return (
    <>
      <div className="whowwearecontainer componant-padding">
        <div className="d-flex   align-items-center justify-content-around flex-wrap whowweare-body">
          <div className=" side-width side-height">
            <img src={imageone} alt="" />
            <div className=" m-auto mt-5 ">
              <div className=" textcolor fw-bold">
                <span className="headerspace"></span> OUR CLASSES
              </div>

              <h3 className="fs-2">
                Sed fringilla, quam consectetur ultrices{" "}
              </h3>
            </div>
          </div>
          <div className=" side-width side-height">
            <img src={imagetwo} alt="" />

            <p className="mt-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et
            </p>

            <span className=" arcunderside ">
              {" "}
              <div className="m-0">
                {" "}
                MORE INFO <FaLongArrowAltRight className="fs-4" />
              </div>
            </span>
          </div>
          <div className="side-width side-height">
            <img src={imagethere} alt="" />
            <h6 className="mt-5">BODY BULDING</h6>
            <div
              class="progress "
              role="progressbar"
              aria-label="Basic example"
            >
              <div class="progress-bar"></div>
            </div>
            <h6 className="mt-3">WEIGHTLIFTING</h6>
            <div
              class="progress "
              role="progressbar"
              aria-label="Basic example"
            >
              <div class="progress-bar"></div>
            </div>
            <h6 className="mt-3">BODY BULDING</h6>
            <div
              class="progress "
              role="progressbar"
              aria-label="Basic example"
            >
              <div class="progress-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
