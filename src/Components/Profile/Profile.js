import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import "./Profile.css"
import profileImage from "../../Images/BITlogo.png"
import UserContext from '../../Context/UserContext'
const Profile = () => {


    const data = useContext(UserContext)


  return (
    <>
        <div className="navbar" style={{height:"120px"}}>
            <Navbar text={"Connected"}/>
        </div>
        <div className="profile_body">
            <div className="details_box_1">
                <div className="profile_image">
                    <img src={data.profileUrl} alt="" />
                </div>
                <div className="name">
                    <h3>{data.user.name}</h3>
                </div>
                <div className="address">
                    <p>{data.user.address}</p>
                </div>
            </div>
            <div className="details_box_2">
                
                <div className="age">
                    <p>Age - {data.user.age} </p>
                </div>
                <div className="sex">
                    <p>Sex - {data.user.sex}  </p>
                </div>
                <div className="fname">
                    <p>Father Name - {data.user.fname} </p>
                </div>   
                <div className="mname">
                    <p>Mother Name - {data.user.mname} </p>
                </div>
                <div className="sportsname">
                    <p>Skilled Sports Name - {data.user.skilledSports} </p>
                </div>
                <div className="achivements">
                    <h4>Achievements</h4>
                    <ul>
                        <li>Achivement1</li>
                    </ul>
                </div>
                <div className="journey">
                    <p>JourneyWriteUp - {data.user.journeyWriteUp}</p>
                </div>
                <div className="creatorname">
                    <p>Content Creator Name - {data.user.creatorName} </p>
                </div>
                <div className="walletAddress">
                    <p>Content Creator Polygon Wallet Address - {data.user.creatorWalletAddress}  </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile