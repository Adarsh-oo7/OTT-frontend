import React from 'react';
import '../custom.css'
const ForgotPassword = () => {
  return (
    <div className="login-body">
      <div className="container position-relative">

        

        <div className="overlay d-flex justify-content-center align-items-center">
          <div className="transparent-box text-center p-5">
            <h3 className="mb-4">Forgot Password</h3>
            <form>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
        
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg w-100">Send Link</button>
          </div>
        </form>
          </div>
        </div>

        
      </div>

      
     
    </div>
  );
};

export default ForgotPassword;
