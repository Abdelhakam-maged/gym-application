import React, { useState } from "react";
import "./home.css";
import Modal from "./homemodel";
const Homesection1 = () => {
  const [userdata, setUserData] = useState({
    height: "",
    weight: "",
  });
const [bmi,setbmi]=useState()

const [show,setshow]=useState(false)
  const data = (e) => {
    userdata[e.target.name] = e.target.value;
    
    console.log(userdata);
  };
  const calc = () => {
    if(userdata.height===""){
      setbmi("Enter your height")
    }
     else if( userdata.weight===""){
      setbmi("Enter your weight")
     
    }
    else{
      setbmi("Your Body Bmi Is "+  parseInt(userdata.weight) / parseInt(userdata.height))
    }
    setshow(true)
  };

  return (
    
    <div className="container bg-dark p-4 bmi">

      <div className="bimcontainer">
        <div className=" bimheader">
          <span className="text-light fs-2">
            Pellentesque turpis porttitor{" "}
          </span>
          <span className="text-danger">CALCULATE BMI</span>
        </div>

        <div className="  mt-4 bimform   justify-content-center     align-items-start">
          <div>
          <label>
            
            <input
              onChange={data}
              type="number"
              placeholder="fit"
              name="height" 
              className="me-3 input1"
            />
            <div className="text-light  ">Height</div>
          </label>
</div>
          <input type="text" value="in" readOnly className="input1 me-3" />
          <div>
          <label>
          <input
            onChange={data}
            type="number"
            placeholder="less"
            name="weight"
            className="input2 me-5"
          />
          <div className="text-light  ">Weight</div>
          </label>
          </div>

          <button className="bg-danger text-light" onClick={calc}>
            CALCULATE
          </button>

        

<Modal show={show} setshow={setshow} bmi={bmi} />

  
          
        </div>
      </div>
      <div className="row p-0 m-0">
<div className="col-12 p-0 underline">

</div>
      </div>
    </div>
  );
};

export default Homesection1;
