import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import UserData from "../../Context/UserData";
import Navbar from "../Navbar/Navbar";
import "./Create.css";

const Create = () => {
  const data = useContext(UserContext)

  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState();
  const [demoImage , setDemoImage] = useState()

  const [con , setCon] = useState("")

  let fileData = new FileReader();

  const handleFile = (e) => {
    const content = e.target.result;
    console.log('file con?tent',  content)
    // setDemoImage(content)
    setCon(content)
    // You can set content in state and show it in render.
  }

  const handleChangeFile = (file) => {
    fileData.onloadend = handleFile;
    // fileData.readAsText(file);
    fileData.readAsDataURL(file)
  }


  const [userValue , setUserValue] = useState({
    name : "",
    age :"",
    sex :" ",
    fname :"",
    mname :"",
    address :"",
    skilledSports : "",
    achievements :" ",
    journeyWriteUp:"",
    creatorName:"",
    creatorWalletAddress :""
  })

  const userData = (e) => {
    setUserValue({ ...userValue , [e.target.name] : e.target.value })
    
  }
  
  const collectSubmitedUserData = () => {
    // console.log(userValue);
    // console.log(data.user);
    data.setUser(userValue)
    // console.log(fileData);
    data.setProfileUrl(con)


  }
  return (
    <>
      <div className="nav" style={{ height: "110px" }}>
        <Navbar text={"Connect Wallet"} />
      </div>

      <div className="create_outer">
        <div className="form">
          <div className="title">Welcome</div>
          <div className="subtitle">Let's create your account!</div>
          <div className="input-container ic1">
            <input
              id="name"
              className="input"
              type="text"
              placeholder=" "
              onChange={userData}
              name="name"
              value={userValue.name}
              required
            />
            <div className="cut" />
            <label htmlFor="tname" className="placeholder">
              Name <span>*</span>
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="age"
              className="input"
              type="text"
              placeholder=" "
              onChange={userData}
              name="age"
              value={userValue.age}
              required
            />
            <div className="cut" />
            <label htmlFor="age" className="placeholder">
              Age <span>*</span>
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="sex"
              className="input"
              type="text"
              placeholder=" "
              onChange={userData}
              name="sex"
              value={userValue.value}
              required
            />
            <div className="cut cut-short" />
            <label htmlFor="sex" className="placeholder">
              Sex <span> </span>
            </label>
          </div>

          <div className="input-container ic2">
            <input
              id="fname"
              className="input"
              type="text"
              placeholder=" "
              onChange={userData}
              name="fname"
              value={userValue.fname}
              required

            />
            <div className="cut cut-short" />
            <label htmlFor="fname" className="placeholder">
              Father Name <span>*</span>
            </label>
          </div>

          <div className="input-container ic2">
            <input
              id="mname"
              className="input"
              type="text"
              placeholder=" "
              onChange={userData}
              name="mname"
              value={userValue.mname}
              required
            />
            <div className="cut cut-short" />
            <label htmlFor="mname" className="placeholder">
              Mother Name <span>*</span>
            </label>
          </div>

          <div className="input-container ic2">
            <input
              id="address"
              className="input"
              type="text"
              placeholder=" "
              onChange={userData}
              name="address"
              value={userValue.address}
              required
            />
            <div className="cut cut-short" />
            <label htmlFor="address" className="placeholder">
              Address <span>*</span>
            </label>
          </div>

          <div className="input-container ic2">
            <input
              id="ssn"
              className="input"
              type="text"
              placeholder=" "
              onChange={userData}
              name="skilledSports"
              value={userValue.skilledSports}
              required
            />
            <div className="cut cut-short" />
            <label htmlFor="ssn" className="placeholder">
              Skilled Sports Name <span>*</span>
            </label>
          </div>

          <div className="input-container ic2">
            <textarea
              id="achievements"
              className="input"
              type="text"
              placeholder=" "
              rows="100"
              cols="20"
              onChange={userData}
              name="achievements"
              value={userValue.achievements}
              required
            ></textarea>
            <div className="cut cut-short" />
            <label htmlFor="achievements" className="placeholder">
              Achievements <span>*</span>
            </label>
          </div>

          <div className="input-container ic2">
            <textarea
              id="jw"
              className="input"
              type="text"
              placeholder=" "
              rows="100"
              cols="20"
              onChange={userData}
              name="journeyWriteUp"
              value={userValue.journeyWriteUp}
            ></textarea>
            <div className="cut cut-short" />
            <label htmlFor="jw" className="placeholder">
              Journey WriteUp <span>*</span>
            </label>
          </div>

          <div className="input-container ic2 file">
            <input
              id="image"
              className="input"
              type="file"
              placeholder=" "
              // onChange={userData}
              // value={selectedFile}
              // onChange={(e) => setSelectedFile(e.target.files[0])}

              onChange={e => 
            handleChangeFile(e.target.files[0])}
              name="image"
              // value={userValue.video}
              required
            />
            <div className="cut cut-short" />
            <label htmlFor="image" className="placeholder">
              Image <span>*</span>
            </label>
          </div>

          <div className="input-container ic2">
            <input
              id="ccn"
              className="input"
              type="text"
              placeholder=" "
              rows="100"
              cols="20"
              onChange={userData}
              name="creatorName"
              value={userValue.creatorName}
              required
            />
            <div className="cut cut-short" />
            <label htmlFor="ccn" className="placeholder">
              Content Creator Name <span>*</span>
            </label>
          </div>

          <div className="input-container ic2">
            <input
              id="ccpwa"
              className="input"
              type="text"
              placeholder=" "
              rows="100"
              cols="20"
              onChange={userData}
              name="creatorWalletAddress"
              value={userValue.creatorWalletAddress}
              required
            />
            <div className="cut cut-short" />
            <label htmlFor="ccpwa" className="placeholder">
              Content Creator Polygon Wallet Address <span>*</span>
            </label>
          </div>

          <button
            type="text"
            className="submit"
            onClick={() => {
              if(userValue === " "){
                alert("fill enteries");
              }
              else{
                navigate("/profile");
              }
              collectSubmitedUserData();
            }}
          >
            Create
          </button>
        </div>

        
      </div>
    </>
  );
};

export default Create;
