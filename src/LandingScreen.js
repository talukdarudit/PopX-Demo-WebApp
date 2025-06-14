import React from 'react'
import './CSS/LandingScreen.css'
import { useNavigate } from 'react-router-dom'



const LandingScreen = () => {

    const navigate = useNavigate()

    // Function to handle navigation to register and login pages
    const handleRegister = () => {
        navigate('/register')
    }
    const handleLogin = () => {
        navigate('/login')
    }
    return (
        <div className='container'>
            <div className='landing-screen'>
                <h1 className='heading'>Welcome to PopX</h1>
                <p className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
                <button className='register' onClick={handleRegister}>Create Account</button>
                <button className='login' onClick={handleLogin}>Already Registered? Login</button>
            </div>
        </div>
    )
}

export default LandingScreen