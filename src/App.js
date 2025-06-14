import React from 'react'
import LandingScreen from './LandingScreen'
import SignupScreen from './SignupScreen'
import LoginScreen from './LoginScreen'
import ProfileScreen from './ProfileScreen'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />}/>
        <Route path="/register" element={<SignupScreen/>} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/profile" element={<ProfileScreen/>} />

        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App