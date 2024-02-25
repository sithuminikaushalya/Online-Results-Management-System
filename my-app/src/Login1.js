import React from 'react';
import './Login1.css';
import background from './assests/image4.png';
import logo from './assests/navbarLogo.png';
import {Link} from 'react-router-dom';

const Login1 = () => {
  return (
    <div className="loginpage-container">
      <img className='background' src={background} alt="student" />
      <img className='logo' src={logo} alt="Cambridge University Logo" />

      <div className="name">
        <p >
          Engineering Faculty
          <br /> <br/>
          Cambridge University
        </p>
      </div>

      <div className="links">
        <ul >
          <li>
            <a href="#" className="admission-btn"> Admissions </a>
          </li>
          <li>
            <a href="#" className="modules-btn"> Modules </a>
          </li>
          <li>
            <a href="#" className="login-btn"><Link to="/login-page-2">Login</Link></a>
          </li>
        </ul>
      </div>

      <div className="page-content">
        <h1>Student Results<br /><br />Management System</h1>
      </div>
    </div>
  );
}

export default Login1;
