import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // New state for success message
  const [username, setUsername] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission
  const navigate = useNavigate();

  function register(event) {
    event.preventDefault();

    if (password1 !== password2) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    const user = {
      username: username,
      email: email,
      password1: password1,
      password2: password2,
    };

    axios.post('http://127.0.0.1:8000/API/reg', user)
      .then(response => {
        console.log('Received response');
        setErrorMessage('');
        setSuccessMessage("Registration successful! Redirecting..."); // Display success message
        setTimeout(() => navigate('/'), 2000); // Redirect after 2 seconds
      })
      .catch(error => {
        console.log("Error:", error);
        if (error.response && error.response.data && error.response.data.errors) {
          const errorMessages = Object.values(error.response.data.errors).join(', ');
          setErrorMessage(errorMessages);
        } else {
          setErrorMessage("Failed to connect to API");
        }
      })
      .finally(() => setIsSubmitting(false));
  }

  return (
    <div className="login-body">
      <div className="container position-relative">
        <div className="overlay d-flex justify-content-center align-items-center">
          <div className="transparent-box text-center p-5">
            <h3 className="mb-4">Sign Up</h3>
            <form onSubmit={register}>
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
                <label htmlFor="username" className="form-label">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  id="username"
                  placeholder="Enter your username"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="password1" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password1}
                  onChange={(event) => setPassword1(event.target.value)}
                  id="password1"
                  placeholder="Enter your password"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="password2" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password2}
                  onChange={(event) => setPassword2(event.target.value)}
                  id="password2"
                  placeholder="Re-enter your password"
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg w-100" disabled={isSubmitting}>
                  {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                </button>
              </div>
            </form>
            <h2 className="text-success">{successMessage}</h2>
            <h2 className="text-danger">{errorMessage}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
