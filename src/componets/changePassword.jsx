import React from 'react';
import '../custom.css'
const Login = () => {
  return (
    <div className="login-body">
      <div className="container position-relative">

        

        <div className="overlay d-flex justify-content-center align-items-center">
          <div className="transparent-box text-center p-5">
            <h3 className="mb-4">Change Password</h3>
            <form>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Enter new Password</label>
            <input type="email" className="form-control" id="email" placeholder="Enter new Password" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg w-100">Change </button>
          </div>
          <a href="">Forgot password?</a>
        </form>
          </div>
        </div>

        
      </div>

      
     
    </div>
  );
};

export default Login;
