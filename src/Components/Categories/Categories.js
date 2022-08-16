import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import "./Categories.css";
import video from "../../Images/Projects.mp4";
import videoImage from "../../Images/polygon.png";
import { AiOutlineStar } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
const Categories = () => {
  const [play, setPlay] = useState(false);

  const navigate = useNavigate()
  return (
    <>
    <div className="nav" style={{height:"110px"}} >
      <Navbar text={"Connected"} />
    </div>
      <div className="heading">
        <h3>Our Platform gives power back to the people to identify and select the talents to next level of their career <br />
        All you have to do is : View and Rate the Videos</h3>
      </div>
      <div className="categories">
        <div className="upperpart">
          <div className="catheading">Categories</div>
          <div className="ul">
            <ul>
              <li>Cricket</li>
              <li>Football</li>
              <li>Hockey</li>
              <li>Volleyball</li>
              <li>Handball</li>
              <li>Throwball</li>
              <li>Basketball</li>
              <li>All types of Athletics</li>
            </ul>
          </div>
        </div>

        <div className="videos">
          <div className="video">
            <ReactPlayer
              url={video}
              height="250px"
              width="100% !important"
              playing={play}
              name="video1"
              controls
            />
            {/* <div className="controls">
              <button
                onClick={() => {
                  setPlay(!play);
                }}
              >
                Pause
              </button>
              <button
                onClick={() => {
                  setPlay(!play);
                }}
              >
                Play
              </button>
            </div> */}
            <div className="ratingContent">
            <div className="name" style={{display:"flex" , justifyContent:"space-between" , marginTop:"10px", alignItems:"center"}}>
              <p>Name - Anubhav Soni</p>
              <button
              style={{
                padding:"5px",
                background:"black",
                color:"white",
                borderRadius:"8px"
              }}
              onClick={() => {
                navigate("/profile")
              }}
              >Profile</button>

            </div>
              <br />
              <p style={{textAlign:"left" , marginTop:"-10px"}}>Rate Anubhav's Profile</p>
            </div>
            <div className="ratings">

              <ul>
                <li>
                  <AiOutlineStar />
                </li>
                <li>
                  <AiOutlineStar />
                </li>
                <li>
                  <AiOutlineStar />
                </li>
                <li>
                  <AiOutlineStar />
                </li>
                <li>
                  <AiOutlineStar />
                </li>
              </ul>
              {/* <p style={{textAlign:"left" , marginTop:"-10px"}}>Rate Anubhav's Profile</p> */}

            </div>
          </div>


          <div className="video">
              
            <ReactPlayer url={video} height="250px" name="video2"  playing={play} width="440px !important" controls />
                {/* <div className="controls">
                  <button
                    onClick={() => {
                      setPlay(!play);
                    }}
                  >
                    Pause
                  </button>

                  <button
                    onClick={() => {
                      setPlay(!play);
                    }}
                  >
                    Play
                  </button>
                </div> */}
                <div className="ratingContent">
            <div className="name" style={{display:"flex" , justifyContent:"space-between" , marginTop:"10px", alignItems:"center"}}>
              <p>Name - Anubhav Soni</p>
              <button
              style={{
                padding:"5px",
                background:"black",
                color:"white",
                borderRadius:"8px"

              }}
              >Profile</button>

            </div>
              <br />
              <p style={{textAlign:"left" , marginTop:"-10px"}}>Rate Anubhav's Profile</p>
            </div>
              <div className="ratings">
                <ul>
                  <li>
                    <AiOutlineStar />
                  </li>
                  <li>
                    <AiOutlineStar />
                  </li>
                  <li>
                    <AiOutlineStar />
                  </li>
                  <li>
                    <AiOutlineStar />
                  </li>
                  <li>
                    <AiOutlineStar />
                  </li>
                </ul>
              </div>
            </div>
            <div className="video">
              <ReactPlayer url={video} height="250px" name="video3" playing={play} width="440px !important" controls />
              {/* <div className="controls">
                <button
                  onClick={() => {
                  setPlay(!play);
                }}
              >
                Pause
              </button>
              <button
                onClick={() => {
                  setPlay(!play);
                }}
              >
                Play
              </button>
            </div> */}

            <div className="ratingContent">
            <div className="name" style={{display:"flex" , justifyContent:"space-between" , marginTop:"10px", alignItems:"center"}}>
              <p>Name - Anubhav Soni</p>
              <button
              style={{
                padding:"5px",
                background:"black",
                color:"white",
                borderRadius:"8px"

              }}
              >Profile</button>

            </div>
              <br />
              <p style={{textAlign:"left" , marginTop:"-10px"}}>Rate Anubhav's Profile</p>
            </div>
            <div className="ratings">
              <ul>
                <li>
                  <AiOutlineStar />
                </li>
                <li>
                  <AiOutlineStar />
                </li>
                <li>
                  <AiOutlineStar />
                </li>
                <li>
                  <AiOutlineStar />
                </li>
                <li>
                  <AiOutlineStar />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
