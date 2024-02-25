import React from 'react';
import './SignUp.css';
import SignUpForm from './SignUpForm';
import background from './assests/image4.png';
import logo from './assests/navbarLogo.png';

const SignUp = () => {
  return (
    <div className="sign-up-page-container">
      <img className='background' src={background} alt="student" />
      <img className='logo-sign-up' src={logo} alt="Cambridge University Logo" />

      <div className="name-sign-up">
        <p >
          Engineering Faculty
          <br /> <br />
          Cambridge University
        </p>
      </div>
      <SignUpForm />
    </div>
  );
}

export default SignUp;