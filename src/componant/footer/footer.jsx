import React from "react";
import { Link } from 'react-router-dom';

import "./footer.css";
import { IoBarbell } from "react-icons/io5";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="pt-5">
      

<footer className="text-center text-lg text-muted footercontainer   ">

  

  <section className=" text-light p-3 ">
    <div className=" text-center text-md-start mt-5">
    
      <div className="footerbody mt-3">

        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
    
          <h6 className="text-uppercase fw-bold fs-2 mb-4">
          <span className="footerhead">      <IoBarbell /> ANGEL FIT</span>
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
    
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
  
          <h6 className="text-uppercase fw-bold mb-4 fs-5 footerhead">
          INFORMATION
          </h6>
          <p>
            <Link  className=' link-underline-light link-underline-opacity-0 text-light '  to={"aboutus"}>ABOUT US</Link>
          </p>
          <p>
          <Link  className=' link-underline-light link-underline-opacity-0 text-light '  to={"aboutus"}>CUSTOMERS</Link>
          </p>
          <p>
          <Link  className=' link-underline-light link-underline-opacity-0 text-light '  to={"aboutus"}>CLIENTS</Link>
          </p>
          <p>
          <Link  className=' link-underline-light link-underline-opacity-0 text-light '  to={"portfolio"}>PORTFOLIO</Link>
          </p>
        </div>
      
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 className="text-uppercase fw-bold mb-4 footerhead fs-5">
          SERVICES
          </h6>
          <p>
          <Link  className=' link-underline-light link-underline-opacity-0 text-light ' >TRAINING AT HOME</Link>
          </p>
          <p>
            <Link  className=' link-underline-light link-underline-opacity-0 text-light ' >FITNESS FOR KIDS</Link>
          </p>
          <p>
          <Link  className=' link-underline-light link-underline-opacity-0 text-light ' >ONLINE COACH</Link>
          </p>
          <p>
          <Link  className=' link-underline-light link-underline-opacity-0 text-light ' >CHAMPIONS</Link>
          </p>
        </div>
        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
      
          <h6 className="text-uppercase fw-bold mb-4 footerhead fs-5">SUBSCRIBE TO NEWSLETTER</h6>
        <input type="text" placeholder="EMAIL"  className="footerinput"/>
        <button className="mt-3 footerbtn">SUBSCRIBE</button>
        </div>
      </div>

    </div>
  </section>

  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-top text-light ">

<div className="me-5 d-none d-xl-block">
  <span className="me-5">Copyright @ 2020 All Rights Reserved.</span>
  <span className="me-5">+614 434 333</span>
  <span className="me-5">info@angelclub.com</span>
  <span className="me-5">Sydney, Australia</span>
</div>

<div className="m-auto">
  <a href="" className="me-4 text-reset">
    <FaFacebook/>
  </a>
  <a href="" className="me-4 text-reset">
    <FaInstagram/>
  </a>
  <a href="" className="me-4 text-reset">
<FaLinkedin/>
  </a>
  <a href="" className="me-4 text-reset">
  <FaTwitter/>
  </a>
  <a href="" className="me-4 text-reset">

  </a>
  <a href="" className="me-4 text-reset">
  <FaYoutube/>
  </a>
</div>

</section>
</footer>

      </div>
    
  );
};

export default Footer;
