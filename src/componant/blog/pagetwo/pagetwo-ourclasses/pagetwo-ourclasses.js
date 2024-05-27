import React from "react";

import "./pagetwo-ourclasses.css";

import Tranning from "./tranning-type";
import Fitenssicon from "../../../fitenssicon/fitenssicon";

const PagetwoOurclasses = () => {
  return (
    <div className="mt-5 pagetwo-ourclasses">
      <div className=" up-side">
        <div className="componantheader m-auto text-center text-light">
          <div className=" textcolor fw-bold ">
            <span className="headerspace mb-1"></span> OUR CLASSES
          </div>

          <h3 className="fs-2">OUR BEST FITNESS & BODYBUILDING CLASSES </h3>
        </div>

        <div className="d-flex align-items-center justify-content-center pb-3 pt-3 flex-wrap ">
          <Tranning h2={"ayhaga"} text={"GYM"} background={"bagrimgone"} />
          <Tranning h2={"ayhaga"} text={"GYM"} background={"bagrimgtwo"} />
          <Tranning h2={"ayhaga"} text={"GYM"} background={"bagrimgthree"} />
          <Tranning h2={"ayhaga"} text={"GYM"} background={"bagrimgfour"} />
        </div>

        <Fitenssicon
          contanerclass={"underside-center"}
          bodyclass={"pagetwo-ourclasses-underside"}
          texcol={"text-light"}
          iconclass={"fiticoncolor"}
        />
      </div>
    </div>
  );
};

export default PagetwoOurclasses;
