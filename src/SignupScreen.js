import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CSS/SignupScreen.css'

const SignupScreen = () => {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
    }
    navigate("/profile", { state: data });
  }
  return (
    <div className="container">
      <div className="signup-screen">
        <h1 className="heading">Create your PopX account</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              required
            />
            <label htmlFor="name" className='required'>Full Name</label>
          </div>

          <div className="number">
            <input
              type="number"
              maxLength={10}
              name="phone"
              id="phone"
              placeholder="Enter your full name"
              required
            />
            <label htmlFor="phone" className='required'>
              Phone number
            </label>
          </div>

          <div className="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              required
            />
            <label htmlFor="email" className='required' >
              Email address
            </label>
          </div>

          <div className="password">
            <input
              type="password"
              name="pwd"
              id="pwd"
              placeholder="Enter your password"
              required
            />
            <label htmlFor="pwd"  className='required'>
              Password
            </label>
          </div>

          <div className="comp-name">
            <input
              type="text"
              name="comp-name"
              id="comp-name"
              placeholder="Enter your company name"
            />
            <label htmlFor="comp-name">
              Company Name
            </label>
          </div>

          <div className="radio">
            <span className="agency-span required">Are you an Agency?</span>

            <div className="radio-btns">
              <div className="radio-btn">
                <input
                  id="radio-yes"
                  type="radio"
                  name="agency"
                  value={"Yes"}
                  required
                />
                <span>Yes</span>
              </div>

              <div className="radio-btn">
                <input
                  id="radio-no"
                  type="radio"
                  name="agency"
                  value={"No"}
                  required
                />
                <span>No</span>
              </div>
            </div>
          </div>

          <button id="create-acc-btn" type="submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignupScreen