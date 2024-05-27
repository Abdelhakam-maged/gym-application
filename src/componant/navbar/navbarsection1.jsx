import React, { useEffect, useState } from "react";
import { IoMdLocate } from "react-icons/io";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./navbar.css";
const socials = [
  {
    name: "facebook",
    icon: <FaFacebook />,
    link: "https://fasebook.com/?lang=ar",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://instagram.com/?lang=ar",
  },
  {
    name: "LINKEDIN",
    icon: <FaLinkedin />,
    link: "https://linkedin.com/?lang=ar",
  },
  {
    name: "TWITTER",
    icon: <FaTwitter />,
    link: "https://twitter.com/?lang=ar",
  },
  {
    name: "YOUTUBE",
    icon: <FaYoutube />,
    link: "https://youtube.com/?lang=ar",
  },
];
const Navbarsection1 = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch("http://www.fakedata.com/");
        if (res.data) {
          setUserData(res.data);
        }
      } catch (e) {
        console.log(e);
        setUserData({
          id: "1",
          address: "Sydney, Australia",
          PhoneNo: "+614 434 333",
          Email: "info@angelclub.com",
        });
      }
    };
    getUserData();
  }, []);
  return (
    <div>
      <div className="row  m-auto navsec1container">
        <div className="col-lg-3 col-sm-6">
          <IoMdLocate className="me-2" />
          <span className="text-light">
            Address :<span> {userData?.address}</span>{" "}
          </span>
        </div>
        <div className="col-lg-3 col-sm-6">
          <IoCallOutline className="me-2" />
          <span className="text-light">
            Call : <span>{userData?.PhoneNo}</span>
          </span>
        </div>
        <div className="col-lg-4 col-sm-6">
          <IoMailOutline className="me-2" />
          <span className="text-light">
            Email : <span>{userData?.Email}</span>
          </span>
        </div>
        <div className="col-lg-2 col-sm-6">
          {socials.map((item) => {
            return (
              <Link
                key={item.name}
                to={item.link}
                className="text-light me-2"
                style={{ textDecoration: "none" }}
              >
                {" "}
                {item.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbarsection1;
