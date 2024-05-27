import React, { useEffect, useRef, useState } from "react";

import imageone from "../../../images/large2.jpg";
import imagetwo from "../../../images/large3.jpg";
import imagethree from "../../../images/large5.jpg";
import imagefour from "../../../images/large6.jpg";
import imagefive from "../../../images/large12.jpg";
import imagesix from "../../../images/large8.jpg";
import imageseven from "../../../images/large7.jpg";
import imageeight from "../../../images/largerun.jpg";
import imagenine from "../../../images/large10.webp";
import imageten from "../../../images/large11.jpg";
import image from "../../../images/imagetwo.jfif";
import { FaPersonRunning } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegFilePdf } from "react-icons/fa";
import { BsFiletypeTxt } from "react-icons/bs";
import "./services.css";

export default function Services() {
  const [services, setservices] = useState([]);

  useEffect(() => {
    const plans = async () => {
      try {
        const res = await fetch("http://www.fakedata.com/");
        if (res.data) {
          setservices(res.data);
        }
      } catch (e) {
        console.log(e);
        setservices([
          { id: 1, head: " PSYCHO TRAINNING", img: imageone },
          { id: 2, head: " PRACTICE AT HOME", img: imagetwo },
          { id: 3, head: " FITNESS FOR KIDS", img: imagethree },
          { id: 4, head: " STRENGHT TRAINNING", img: imagefour },
          { id: 5, head: "BOXING FOR MEN ", img: imagefive },
          { id: 6, head: "CARDIO FOR MEN ", img: imagesix },
          { id: 7, head: " MEDITATION CLASSES ", img: imageseven },
          { id: 8, head: "RUNNING ", img: imageeight },
          { id: 9, head: "WEIGHT LIFING ", img: imagenine },
          { id: 10, head: "ADVANCED GYM ", img: imageten },
        ]);
      }
    };
    plans();
  }, []);

  const [headtext, setheadtext] = useState("");
const [curactivity,setCuractivity] = useState("")
  const [showservices, setshowservices] = useState(true);

  const showservice = (head, id) => {
    setCuractivity(id)
    setshowservices(false);
    setheadtext(head);
  };

  return (
    <div className=" componant-padding   m-auto containerwidth flex-wrap mt-5">
      <div className="servicescontainer">
        <div className="servicestybes">
          {services.map((item) => {
            return (
              <div
                key={Math.random()}
                id={item.id}
                onClick={() => {
                  showservice(item.head, item.id);
                }}
                className={`cursor-poiner text-center ${
                  curactivity=== item.id ? "clicked" : ""
                }`}
              >
                <span className="pt-3 pb-3 d-block">
                  {" "}
                  {item.head} <IoIosArrowForward />
                </span>
                <hr className="m-0" />
              </div>
            );
          })}
        </div>
        <div className="downloadside">
          <div className="mt-5 p-3 text-center text-light binkbg ">
            {" "}
            <FaRegFilePdf className="me-4 fs-5" /> DOWNLOAD PDF FILE
          </div>
          <div className="mt-3 p-3 text-center text-light bg-dark">
            {" "}
            <BsFiletypeTxt className="me-4 fs-5" /> DOWNLOAD TXT FILE
          </div>
          <div className="mt-5 ">
            <img src={image} alt=" " />
            <div className="binkbg text-light pe-2 pb-5 pt-3 ps-3 ">
              <h4 className="pb-2">NEED SOME HELP ?</h4>
              <p>lorem consetetur sadipscing elitr, sed diam nonumy eirmod </p>
              <p>
                <IoCallOutline className="fs-5  mb-1" />{" "}
                <span>CALL: +934 434 333</span>
              </p>
              <p>
                <MdOutlineMailOutline className="fs-5  mb-1" />{" "}
                <span>EMALL: info@angelclub.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {showservices ? (
        <div className="serhome-width">
          <div className="serviceshome">
            <h3> OUR SERVICES </h3>
          </div>
          <div className="">
            <h5 className="mt-5 ">
              Here are a few ways in which you can implement Textmagic’s online
              SMS services for your fitness club:
            </h5>
            <p>
              Improve gym onboarding with automated SMS templates. Prepare
              automated text sequences that will make it easier for new gym
              members to get started on their fitness goals.
            </p>

            <p>
              Acknowledge clients for coming to the club. Send personalized gym
              SMS to congratulate members for showing up at personal training
              sessions. This will make them feel special, empowered, and proud.
              Use your Textmagic SMS scheduler to send periodic encouragement
              texts to your loyal clients.
            </p>

            <p>
              Announce new classes & programs with our bulk SMS software. Enroll
              members automatically using keywords and auto-responders. You can
              also add short URLs that redirect the user to pricing or schedule
              pages.
            </p>
          </div>
        </div>
      ) : (
        <div className="serhome-width">
          {services
            .filter((item) => item.head === headtext)
            .map((item) => {
              return (
                <div key={Math.random()}>
                  <img src={item.img} alt=" " className="imagestyle" />
                  <h3 className="mt-5"> {item.head} </h3>
                  <p>
                    Purpose: to analyze the phenomenon of psychological and
                    psycho-physical training as part of physical education of
                    students. Material: literary sources about problem
                    investigation. Results: are given and analyzed a number of
                    factors that determine the need for higher education in the
                    special psychological and psycho-physical preparation for
                    professional work.
                  </p>
                  <div className="d-flex flex-wrap mt-5  justify-content-center">
                    <div className="d-flex side-width align-items-center   ">
                      <FaPersonRunning className="fs-3 me-3 binkcolor" />
                      <div>
                        <h6>{item.head}</h6>
                        <p>phenomenon of psychological and psycho-physical</p>
                      </div>
                    </div>
                    <div className="d-flex side-width align-items-center ">
                      <FaPersonRunning className="fs-3 me-3 binkcolor " />
                      <div>
                        <h6>{item.head}</h6>
                        <p>phenomenon of psychological and psycho-physical</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    {" "}
                    The question of psychological and psycho-physical
                    preparation of students for professional work in the
                    structure of physical education has considered. The
                    difference has shown in the proposed concept of
                    "psychological and psycho-physical training" known in
                    physical education concept of "professionally applied
                    physical training" and "psycho-physical preparation".
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
