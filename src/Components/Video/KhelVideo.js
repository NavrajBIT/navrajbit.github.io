import React from "react";
import "./KhelVideo.css";
import ratingStar from "../../Images/rating.svg";
import viewIcon from "../../Images/view.svg";

const KhelVideo = (props) => {
  return (
    <div className="khelvideocontainer">
      <div>
        <iframe
          width="420"
          height="236"
          src={props.src}
          title={props.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="videotitlecontainer">
        <h3>{props.title}</h3>
        <div className="viewscontainer">
          301,012
          <img src={viewIcon} alt="" />
        </div>
      </div>
      <div className="khelvideoinfo">
        <div className="playerinfo">
          <div className="playername">
            <a href="/talent">{props.player}</a>
          </div>
          <div>{props.sport}</div>
        </div>

        <div className="ratinginfo">
          <div className="ratingstars">
            <img src={ratingStar} alt="" />
            <img src={ratingStar} alt="" />
            <img src={ratingStar} alt="" />
            <img src={ratingStar} alt="" />
            <img src={ratingStar} alt="" />
          </div>
          {props.rating}/5
        </div>
      </div>
    </div>
  );
};

export default KhelVideo;
