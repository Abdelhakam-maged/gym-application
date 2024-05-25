import React from "react";
import "./classes.css";
import { FaRunning, FaLongArrowAltRight } from "react-icons/fa";


const classes = [
  { icone: <FaRunning />, text: "GYM", h4: "Morbi sodales" },
  { icone: <FaRunning />, text: "GYM", h4: "hendrerit id" },
  { icone: <FaRunning />, text: "GYM", h4: "purus fringilla" },
  { icone: <FaRunning />, text: "GYM", h4: "accumsan orci" },
];

const Classes = (props) => {
  return (
    <>
      <div className=" componant-padding">
        <div className="componantheader m-auto text-center">
          <div className=" textcolor fw-bold">
            <span className="headerspace"></span> OUR CLASSES
          </div>

          <h3 className="fs-2">Sed fringilla, quam consectetur ultrices </h3>
        </div>
        
        <div className="d-flex align-items-center justify-content-center flex-wrap ">
          {classes.map((item) => {
            return (
              <div key={item.h4} className=" classbody  m-3 ">
                <div className="fs-2 d-block mb-5 textcolor">
                  {" "}
                  {item.icone}{" "}
                </div>
                <span className="opacity-25">{item.text}</span>
                <h4>{item.h4}</h4>
                <hr className="w-75" />
                <span className="spancol">
                  MORE INFO <FaLongArrowAltRight className="ms-5 fs-4" />{" "}
                </span>
              </div>
            );
          })}
        </div>
      </div>


    </>
  );
};

export default Classes;
