import React, { useEffect, useState } from "react";
import "./COACHES.css";
import imageone from "../../images/image1.jfif";
import imagetwo from "../../images/images (1).jfif";
import imagethree from "../../images/images.jfif";
import Fitenssicon from "../fitenssicon/fitenssicon";


const COACHES = () => {
  const [coachesData, setcoachesData] = useState([]);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch("http://www.fakedata.com/");
        if (res.data) {
          setcoachesData(res.data);
        }
      } catch (e) {
        console.log(e);
        setcoachesData([
          {
            img: imageone,
            head: "JESIE PINKMAN",
            pargh:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
          },
          {
            img: imagetwo,
            head: "ALEX PHOENIX",
            pargh:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
          },
          {
            img: imagethree,
            head: "WALTER WHITE",
            pargh:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
          },
        ]);
      }
    };
    getUserData();
  }, []);
  return (
    <div className="componant-padding">
      <div className="componantheader m-auto text-center">
        <div className=" textcolor fw-bold">
          <span className="headerspace"></span> COACHES
        </div>

        <h3 className="fs-2">BUILD YOUR BODY WITH OUR BEST TRAINERS </h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
        </p>
      </div>
      <div className="">
        <div className="d-flex flex-wrap justify-content-center  ">
          {coachesData.map((item) => {
            return (
              <div key={Math.random()} className="coachesbody" >
                <img src={item?.img} alt="a" className="coachesimage" />
                <div className="artbody">
                <h5 className="mt-5">{item?.head}</h5>
                <p>{item?.pargh}</p>
</div>
              </div>
            );
          })}
        </div>
        <Fitenssicon iconclass={"fiticoncolor"}/>
      </div>
    </div>
  );
};

export default COACHES;
