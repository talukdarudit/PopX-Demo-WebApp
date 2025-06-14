import React from 'react'
import './CSS/ProfileScreen.css'
import { useLocation } from "react-router";
import profilePicture from './img/Ellipse 114.png'
import cameraIcon from './img/Group 1585.png'


const ProfileScreen = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div className='container'>
      <div className='profile-screen'>
        <div className='settings'>Account Settings</div>
        <div className='profile-wrapper'>
          <div className='profile-picture'>
            <img
              id="pfp"
              src={profilePicture}
              alt=""
              title="Profile Picture"
            />
          </div>
          <div className='camera-icon'>
            <img
              id="pfp"
              src={cameraIcon}
              alt=""
              title="Profile Picture"
            />
          </div>

          <div className='user-info'>
            <h4>{data?.name || "Marry Doe"}</h4>
            <p>{data?.email || "Marry@Gmail.com"}</p>
          </div>

        </div>

        <p className='description'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
        
        <div className='extra-space'></div>
      </div>
    </div>
  )
}

export default ProfileScreen