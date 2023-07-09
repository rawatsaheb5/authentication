import React, { useState } from "react";
import "./register.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, push, set } from 'firebase/database';
import { app } from '../firebase';

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    business: "",
    address: "",
    website: "",
    about: "",
    password: "",
    repassword: "",
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
    const requiredFields = ["firstName", "lastName", "email", "about","business","website","address","password", "repassword","contact"];
    const emptyFields = requiredFields.filter((field) => !user[field]);

    if (emptyFields.length > 0) {
      toast.error("all fields are required")
      console.log("Please fill in all required fields.");
      return;
    }
    if (user.password !== user.repassword) {
      toast.error("password does not match with confirm password")
      console.log('password does not match with confirm password')
      return;
    }
    try {
      const auth = getAuth(app);
      const createdUser = await createUserWithEmailAndPassword(auth, user.email, user.password);
  
      if (createdUser) {
        const db = getDatabase(app);
        const userRef = push(ref(db, 'users'));
        await set(userRef, {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          contact: user.contact,
          business: user.business,
          address: user.address,
          website: user.website,
          about: user.about,
        });
        console.log('User registered and logged in:', createdUser);
  
        // Perform additional operations or navigate to the desired page after successful registration and login
      }
      toast.success('user added successfully')
      console.log('User added successfully!');

    } catch (error) {
      toast.error('something went wrong')
      console.error('Error creating user:', error);
      // Handle the error or display an error message to the user
    }
  };

  return (
    <div className="container">
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      <form className="content">
        
          <h2>Create New Account</h2>
        

        <div className="input-div top-div">
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={user.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-div">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name*"
            value={user.lastName}
            onChange={handleInputChange}
          />
        </div>
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
            type="text"
            name="contact"
            placeholder="Contact Number*"
            value={user.contact}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-div">
          <input
            type="text"
            name="business"
            placeholder="Business Name*"
            value={user.business}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-div">
          <input
            type="text"
            name="address"
            placeholder="Address*"
            value={user.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-div">
          <input
            type="text"
            name="website"
            placeholder="Website*"
            value={user.website}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-div">
          <input
            type="text"
            name="about"
            placeholder="About*"
            value={user.about}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-div">
          <input
            type="text"
            name="password"
            placeholder="Password*"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-div">
          <input
            type="text"
            name="repassword"
            placeholder="Confirm Password*"
            value={user.repassword}
            onChange={handleInputChange}
            
          />
          
        </div>
        <div className="btn">
          <button onClick={handleSubmit}>Create Account</button>
        </div>

        <div className="input-div para">
          <p>Already have an account?</p>
          <p><Link to='/login'>Log In now.</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Register;
