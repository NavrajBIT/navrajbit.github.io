import React, { useState } from 'react'
import UserContext from './UserContext'
const UserData = (props) => {
    
    const [user , setUser] = useState({
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
    creatorWalletAddress :"",

    })

    const [profileUrl , setProfileUrl] = useState("")

    // console.log(user);


  return (
    <>
    <UserContext.Provider value={{user, setUser , setProfileUrl , profileUrl}}>
        {props.children}
    </UserContext.Provider>
    </>
  )
}

export default UserData