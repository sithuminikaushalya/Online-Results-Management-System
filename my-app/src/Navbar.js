import React from 'react';
import "./Navbar.css";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <img src="./assets/navbarLogo.png" alt="Cambridge University Logo" />
      <p className="namehome">
        Engineering Faculty
        <br/> <br/>
        Cambridge University
      </p>
      <ul>

        <li>
          <a href="#" className='home-btn'>Home</a>
        </li>

        <li>
          <a href="#" className='admission-btn'>Admissions</a>
        </li>

        <li>
          <a href="#" className='modules-btn'>Modules</a>
        </li>
        
        <li>
          <a href="#" className='results-btn'><Link to="/login-page-1">Results</Link></a>
        </li>


      </ul>
    </nav>
  );
};

export default Navbar;



