import React from 'react';
import "./Header.css";
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <div className='cta'>
          <p className="vision">The Best University of the State</p>
          <h1>Cambridge University</h1>
          <img src="./assets/image3.png" alt="Cambridge University" />
          <a href="#" className='view-courses-btn'>View Courses</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

