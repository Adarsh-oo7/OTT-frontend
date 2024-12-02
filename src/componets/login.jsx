import React, { useState } from 'react';
import '../custom.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    axios.post('http://127.0.0.1:8000/API/login', user)
      .then(response => {
        const token = response.data.token;  // Assuming the response contains the token
        localStorage.setItem("authToken", token);  // Store token in localStorage
        setErrorMessage('');  // Clear any previous error messages
        navigate('/home');  // Redirect to the home page or dashboard
      })
      .catch(error => {
        console.error("Login error:", error);
        if (error.response && error.response.data) {
          setErrorMessage("Invalid credentials. Please try again.");
        } else {
          setErrorMessage("Failed to connect to the server. Please check your connection.");
        }
      });
  };

  return (
    <div className="login-body">
      <div className="container position-relative">
        <div className="overlay d-flex justify-content-center align-items-center">
          <div className="transparent-box text-center p-5">
            <h3 className="mb-4">Login</h3>
            <form onSubmit={submit}>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg w-100">Login</button>
              </div>
            </form>
            {errorMessage && <h2 className="text-danger mt-3">{errorMessage}</h2>}
            <Link to="/forgotpassword" className="d-block mt-3">Forgot password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
