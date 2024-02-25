import React from 'react';
import './Login2.css';
import LoginForm from './LoginForm';
import background from './assests/image4.png';
import logo from './assests/navbarLogo.png';

const Login2 = () => {
  return (
    <div className="loginpage-container-2">
      <img className='background' src={background} alt="student" />
      <img className='logo2' src={logo} alt="Cambridge University Logo" />

      <div className="name2">
        <p >
          Engineering Faculty
          <br /> <br />
          Cambridge University
        </p>
      </div>
      <LoginForm />
    </div>
  );
}

export default Login2;