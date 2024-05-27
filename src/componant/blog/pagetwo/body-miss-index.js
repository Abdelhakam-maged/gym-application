import React, { useState } from 'react'
import Modal from '../../Home/homemodel'

import './bodymissindex.css'
import { useSearchParams } from 'react-router-dom';
export default function BodyMissIndex() {

  const [userdata, setUserData] = useState({
    height: "",
    weight: "",
  });
  
const [bmi,setbmi]=useState()

const [show,setshow]=useState(false)
  const data = (e) => {
    userdata[e.target.name] = e.target.value;
    
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
    <div className='d-flex bodycontainer  componant-padding align-items-center justify-content-around flex-wrap '>
        <div className="componantheader side-width">
          <div className=" textcolor fw-bold mb-5">
            <span className="headerspace"></span> OUR CLASSES
          </div>

          <h3 className="fs-1 mb-3">CALCULATE YOUR BODY MASS INDEX </h3>
          <p>Lorem Sed fringilla, quam consectetur ultrices Sed fringilla, quam consectetur ultrices</p>
        </div>

        <div className='side-width '>
        <label className='d-block mb-5'>
        <div className="  ">Height</div>
            <input
               onChange={data}
              type="number"
              placeholder="fit"
              name="height"
              className=" inputone mb-3"
            />
               <input
              
              type="text"
              value='in'
            readOnly
              className="inputtwo"
            />
          </label>
          <label className='w-100 mb-5' >
          <div className=" ">Weight</div>
          <input
             onChange={data}
            type="number"
            placeholder="less"
            name="weight"
            className="w-100"
          />
          
          </label>
          <button className='mt-2 ps-3 pe-3' onClick={calc}>CALCULATE</button>

          < Modal show={show} setshow={setshow} bmi={bmi} />
        </div>
        <div className='side-width'>
        <table className=' m-auto mb-5  weight-status '>
      <thead >
      <tr className=''>
     
        <th  className=''>BMI</th>
        <th className=''>Weight status</th>
      
      </tr>
      </thead>
      <tbody>
      <tr>
       
        <td>BELOW 18.5</td>
        <td> UNDERWEIGHT</td>
      
    
   
      </tr>

      <tr>
     
        <td>18.5-24.9</td>
        <td>HEALTHY</td>
     
      </tr>
      <tr>
     
     <td>25.0-29.9</td>
     <td>OVERWEIGHT</td>
  
   </tr>
   <tr>
     
     <td>30 AND ABOVE</td>
     <td>OBESE</td>
  
   </tr>

  
      </tbody>
      <caption>BMR METABOLIC RETA / BMI BODY MASS INDEX</caption>
     
    </table>
        </div>
    </div>
  )
}
