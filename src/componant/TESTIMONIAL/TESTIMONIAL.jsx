import React, { useEffect, useState } from "react";
import "./TESTIMONIAL.css";
import { GoArrowSwitch } from "react-icons/go";
import { FaStar,FaCheck } from "react-icons/fa";
import image1 from "../../images/images (1).jfif"
import TESTIMONIALHEADER from "./TESTIMONIALHEADER";
const TESTIMONIAL = () => {
  const [plans, setplans] = useState([]);


  useEffect(() => {
    const plans = async () => {
      try {
        const res = await fetch("http://www.fakedata.com/");
        if (res.data) {
          setplans(res.data);
        }
      } catch (e) {
        console.log(e);
        setplans([
          { 
            h4: "BASIC PLAN",
            p: "HERE GOES SOME DESCRIBTION",
            cost: "$10 monthly",
            icons: [
              <FaCheck />,
              <FaCheck />,
              <FaCheck />,
            ],
          },

          {
            h4: "PRO PLAN",
            p: "HERE GOES SOME DESCRIBTION",
            cost: "$15 monthly",
            bg: "bg-dark ",
            icons: [
              <FaCheck />,
              <FaCheck />,
              <FaCheck />,
            ],
          },
          {
            h4: "UNLIMITED PLAN",
            p: "HERE GOES SOME DESCRIBTION",
            cost: "$100",
            icons: [
              <FaCheck />,
              <FaCheck />,
              <FaCheck />,
            ],
          },
        ]);
      }
    };
    plans();
  }, []);


  return (
    <div className="testimonialcontainer componant-padding">
  

      <div className=" w-100  testimonbody m-0">
        <h4 className="text-center text-light mb-5 mt-5 fs-3">BEST PRICING TABLES</h4>
        <div className="d-flex justify-content-center flex-wrap ">
          {plans.map((item) => {
            
            return (
              
              <div key={item.h4} className={item.h4==="PRO PLAN"?"text-light text-center proplanbgcolor  m-4   ":"text-light text-center m-4 plans    bg-dark    "}>
                <h5>{item?.h4}</h5>
                <p>{item?.p}</p>
                <span className="fs-3   mb-3 text-light">{item?.cost}</span>
                {item?.icons.map((item) => {
                    return <p className="mt-3 " key={Math.random()}>
              {item}
                <span className="ms-3">chick</span>    
                  </p> 
                  })}
                
                <button className="mt-3">MORE INFO</button>
              </div>
            );
          })}
        </div>

      <TESTIMONIALHEADER/>
      </div>
    </div>
  );
};

export default TESTIMONIAL;
