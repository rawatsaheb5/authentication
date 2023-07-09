import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from "../firebase";
const auth = getAuth(app);

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // User login successful, perform further operations
        toast.success("sign-in successful")
        console.log('User login successful:', userCredential.user);
      })
      .catch((error) => {
        toast.error('invalid credentials')
        console.error('Error logging in:', error);
      });
    } catch (error) {
      toast.error('something went wrong')
      console.error("Error logging in:", error);
    }
  };

  return (
    
    <form className="login-container">
      <ToastContainer />
      <h2>Log In</h2>
      <div className="input-div">
        <input
          type="text"
          name="email"
          placeholder="E-mail*"
          value={user.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-div">
        <input
          type="password"
          name="password"
          placeholder="Password*"
          value={user.password}
          onChange={handleInputChange}
        />
      </div>
      <Link className="reset" to="/reset">
        Forgot Password?
      </Link>
      <div className="btn">
        <button onClick={handleSubmit}>Log In</button>
      </div>
      <p>
        Don't have an account? <br />
        <Link to="/register">Create New Account</Link> now
      </p>
    </form>
  );
};

export default Login;
