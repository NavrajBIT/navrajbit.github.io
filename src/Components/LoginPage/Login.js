// "use strict";
import React, { useState } from "react";
import "./Login.css";

import { motion, useScroll } from "framer-motion";
import img1 from "../../Images/loginPageImage.webp";
// import img3 from "../Images/4400847.jpg";

import img2 from "../../Images/polygon.png"

import { AnimatePresence } from "framer-motion";
import Navbar from "../Navbar/Navbar";
// import { AiOutlineArrowRight } from "react-icons/ai";
// import Footer from "./Footer";
// import Navbar from "./Navbar/Navbar";

const Login = () => {
  const { scrollYProgress } = useScroll();
  //   const arrow = "\\0279E";
  const [clicked, setClicked] = useState(false);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const text = "Connect Wallet";
  return (
    <>  
    <div className="nav" style={{height:"110px"}} >
      <Navbar text={"Connect Wallet"}/>
    </div>
      <div className="outerbody">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="gradient"></div>
        {/* Navbar Section */}

        {/* <Navbar connectText={text}  /> */}

        {/* Navbar Section */}

        <div className="main_login_page">
          <div className="login_box">
            <motion.div
              className="mainheading"   
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h4>
                Decentralized Talent Scouting platform to Identify,Rate,Select
                and Sponsor the talent across the country with the help of
                content creators and the people.
              </h4>
            </motion.div>
          </div>
          <div className="built_on">
            <h3>Built On - Polygon Network</h3>
            <img src={img2} alt="" />
          </div>
        </div>

        <motion.div
          className="image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="img">
            <img src={img1} alt="" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Login;
