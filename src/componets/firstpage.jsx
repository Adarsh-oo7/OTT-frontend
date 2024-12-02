import React from 'react';
import { Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../custom.css'


const Firstpage = () => {
  return (
    <div className="login-body">
      <div className="container position-relative">

 
        <div className="overlay d-flex justify-content-center align-items-center">
          <div className="transparent-box text-center p-5">
            <p className="mb-4">Choose an option to proceed</p>
            <Link className="btn btn-primary btn-lg mx-2" to="/login">Login</Link>
            <Link className="btn btn-primary btn-lg mx-2" to="/signup">Sign Up</Link>
          </div>
        </div>

      
      </div>

      
    
    </div>
  )
}

export default Firstpage
