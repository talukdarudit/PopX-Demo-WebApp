import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CSS/LoginScreen.css'


const LoginScreen = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
        }
        navigate("/profile", { state: data });
    }
    return (
        <div className="container">
            <div className="login-screen">
                <h1 className="heading">Signin to your PopX account</h1>
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit,
                </p>

                <form className="signin-form" onSubmit={handleSubmit}>
                    <div className="email">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter email address"
                            required
                        />
                        <label htmlFor="email">Email Address</label>
                    </div>

                    <div className="password">
                        <input
                            type="password"
                            name="pwd"
                            id="pwd"
                            placeholder="Enter password"
                            required
                        />
                        <label htmlFor="pwd">Password</label>
                    </div>

                    <button type="submit" id="submit-btn" >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen