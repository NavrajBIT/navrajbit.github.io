import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../Images/BITlogo.png";

// import useNavigation from "use-navigation";
// import { useNavigate } from "react-router";
import "./Navbar.css"

const Navbar = (props) => {
  const navigate = useNavigate();
// const [text ,setText] = []



  return (
    <>
      <div className="login_nav">
        <div className="logo">
          <img onClick={() => {
            // navigate("/")
          }}  
          src={logo}
           alt="" />
        </div>
        <div className="create">
          <button onClick={()=> {
            navigate("/create")
          }}>Create</button>
        </div>

       
        <div className="connect_button">
          <button onClick={() => {
                        navigate("/categories")
          }}>
            {/* Connect Wallet */}
            {props.text}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
