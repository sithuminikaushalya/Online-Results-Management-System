import React from 'react';
import "./Info.css";
import { facebooklogo, instagramlogo, linkedinlogo, twitterlogo, youtubelogo } from "./assests";

const Info = () => {
  return (
    <div className="info-container">
      <p>Follow us</p>
      <div className="social-icons">
        <a href="https://www.facebook.com/cambridge.university/" target="_blank" rel="noopener noreferrer">
          <img src={facebooklogo} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/cambridgeuniversity/" target="_blank" rel="noopener noreferrer">
          <img src={instagramlogo} alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/school/university-of-cambridge/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinlogo} alt="Instagram" />
        </a>
        <a href="https://twitter.com/Cambridge_Uni" target="_blank" rel="noopener noreferrer">
          <img src={twitterlogo} alt="LinkedIn" />
        </a>
        <a href="https://www.youtube.com/user/CambridgeUniversity" target="_blank" rel="noopener noreferrer">
          <img src={youtubelogo} alt="YouTube" />
        </a>
      </div>
    </div>
  );
}

export default Info;
