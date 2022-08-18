import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../Context/UserContext";

import logo from "../../Images/BITlogo.png";
import "./Navbar.css";

const Navbar = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="login_nav">
        <div className="logo">
          <img
            onClick={() => {
              navigate("/");
            }}
            src={logo}
            alt="Beyond Imagination Technologies"
          />
        </div>
        <div className="navButtonSection">
          <div className="navButton">
            <button
              onClick={() => {
                navigate("/explore");
              }}
            >
              <h1>Explore</h1>
            </button>
          </div>
          {user.isConnected && (
            <div className="navButton">
              <button
                onClick={() => {
                  navigate("/createtalent");
                }}
              >
                <h1>Add Talent</h1>
              </button>
            </div>
          )}

          <div className="navButton">
            <button
              onClick={() => {
                if (user.isConnected) {
                  navigate("/profile");
                } else {
                  user.login();
                }
              }}
            >
              <h1>{user.isConnected ? "Profile" : "Connect"}</h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
