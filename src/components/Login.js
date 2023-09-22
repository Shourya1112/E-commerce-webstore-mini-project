import React, { useState } from "react";
import showIcon from "../assets/show.png";
import hideIcon from "../assets/hide.png";
import Header from "./Header";
import { Link } from "react-router-dom";
import "../styles/Login.css"

const Login = (props) => {

  const [show, setShow] = useState(false);
//   const navigate = useNavigate();

  const handleShow = () => {
    setShow(!show);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform your form submission logic here

    // Redirect to the "/" route
    // LoginPage((prev) => prev = !prev)
  };


  return ( 
    <div>
    <Header />
    <div className="login-page">
        <div className="login">
                <div className="sign">
                    <h2 className="log--heading">Sign In</h2>
                    <h4 className="log--text">sign in to your account</h4>
                    <div className="sign--form">
                        <form onSubmit={handleSubmit}>
                            <h3 className="form--label">Email address</h3>
                            <input 
                                className="input" 
                                type="email" 
                                name="Email" 
                                placeholder="Your Email Id"
                                required
                            />
                            <h3 className="form--label">Password</h3>
                            <div className="password">
                                <input 
                                    className="password--input" 
                                    type={ show ? "text" : "password" } 
                                    name="Password" 
                                    placeholder="Your Password" 
                                    required
                                />
                                <img 
                                    src={show? hideIcon : showIcon } 
                                    onClick={handleShow} 
                                    alt="icon"
                                    className="eyecon"
                                />
                            </div>
                            <p className="forgot">Forgot password?</p>
                            <Link to="/">
                            <input 
                                className="input--btn" 
                                type="submit" 
                                value="Sign In" 
                            />
                            </Link>
                        </form>
                    </div>
                    <div className="sign--up">
                        <p className="no--account">Don't have an account?</p>
                        <p className="register">Register here</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;
