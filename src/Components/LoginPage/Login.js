import React, { useState } from "react";
import "./Login.css";
import { motion, useScroll } from "framer-motion";
import img1 from "../../Images/loginPageImage.webp";
import img2 from "../../Images/polygon.png";
import { useContext } from "react";
import UserContext from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  return (
    <>
      <div className="loginpage">
        <motion.div
          className="mainheading"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>KHELMANCH</h1>
          <h6>
            Decentralized Talent Scouting platform to Identify,Rate,Select and
            Sponsor the talent across the country with the help of content
            creators and the people.
          </h6>
        </motion.div>

        <div className="networkContainer">
          <h3>Built On - Polygon Network</h3>
          <img
            src={img2}
            alt="Polygon Network"
            onClick={() => {
              window.open("https://polygon.technology");
            }}
          />
        </div>

        <div className="ctaSection">
          <h1>Explore Top Talent in Sports</h1>
          <button
            onClick={() => {
              navigate("/explore");
            }}
          >
            <h1>Explore</h1>
          </button>
        </div>

        <motion.div
          className="imageContainer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={img1} alt="" />
        </motion.div>
        <div className="ctaSection">
          <h1>Become a Content-Creator</h1>
          <h2>Help the budding talent of India</h2>
          <div className="steps">
            <h3>Step1. Connect your wallet</h3>
            <h3>Step2. Create your profile</h3>
            <h3>Step3. Create talent&apos;s profile</h3>
            <h3>Step4. Upload talent&apos;s videos</h3>
          </div>
          {user.isConnected ? (
            <button
              onClick={() => {
                navigate("/createtalent");
              }}
            >
              <h1>Add Talent</h1>
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  user.login();
                }}
              >
                <h1>Connect</h1>
              </button>
              <a href="https://metamask.io">
                Learn more about blockchain wallets
              </a>
            </>
          )}
        </div>

        <div className="howItWorks"></div>
      </div>
    </>
  );
};

export default Login;
