import React, { useState } from 'react';
import './LoginPage.css';
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate email
    if (!email) {
      setEmailError('Email or mobile number is required.');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required.');
      isValid = false;
    } else if (password.length < 4 || password.length > 60) {
      setPasswordError('Your password must contain between 4 and 60 characters.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      // Proceed with form submission (e.g., API call)
      console.log('Form submitted:', { email, password });
    }
  };

  return (
    <div className="login-container flex flex-col justify-center items-center min-h-screen bg-gray-900">
      <Link to={'/home'} className="mb-6 ml-10 mt-6 w-24 sm:w-40 mr-auto">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png" alt="Netflix" />
      </Link>

      <form onSubmit={handleSubmit} className="login-form bg-black/80 px-10 sm:px-16 py-8 rounded-lg sm:w-full max-w-md w-11/12 h-100">
        <h2 className="text-white text-4xl font-bold mb-8">Sign In</h2>
        
        <div className="input-group mb-4">
          <input 
            type="text" 
            className="input-field bg-transparent border border-gray-600 rounded-sm p-4 w-full text-white placeholder-gray-400" 
            placeholder="Email or mobile number" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <p className="err-text text-red-500 text-sm mt-1 inline-flex">
              <IoCloseCircleOutline className="w-8 h-5" />
              {emailError}
            </p>
          )}
        </div>
        
        <div className="input-group mb-4">
          <input 
            type="password" 
            className="input-field bg-transparent border border-gray-600 rounded-sm p-4 w-full text-white placeholder-gray-400" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <p className="err-text text-red-500 text-sm mt-1 inline-flex">
              <IoCloseCircleOutline className="w-8 h-5" />
              {passwordError}
            </p>
          )}
        </div>
        
        <button type="submit" className="bg-red-600 w-full text-xl font-semibold text-white py-2 rounded-sm mb-4">Sign In</button>
        
        <p className="text-white text-center mb-4">OR</p>
        <button className="w-full rounded-sm py-2 bg-gray-700/40 text-xl font-semibold text-white mb-4">Use a sign-in code</button>
        
        <p className="text-white text-center mb-4 cursor-pointer hover:underline">Forgot password?</p>
        
        <div className="flex items-center mt-14 sm:mt-0 my-6">
          <MdCheckBoxOutlineBlank className="text-white text-2xl mr-2 cursor-pointer" />
          <p className="text-white">Remember me</p>
        </div>
        
        <p className="text-white text-sm text-center">
          New to Netflix? <a href="#" className="text-blue-500 hover:underline">Sign up now.</a>
        </p>
        
        <small className="text-gray-500 text-xs block text-center mt-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-400 cursor-pointer hover:underline">Learn more.</span>
        </small>
      </form>
    </div>
  );
};

export default LoginPage;
