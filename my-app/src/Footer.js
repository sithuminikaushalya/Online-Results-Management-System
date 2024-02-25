// import React from 'react';
// import "./Footer.css";
// import { phonelogo, emaillogo } from "./assests";
// import image from './assests/Logo.png';

// const Footer = () => {
//   const handlePhoneClick = () => {
//   };
//   const handleEmailClick = () => {
//   };

//   return (
//     <div className="footer-container">

//       <div >
//         <div className="university-text">
//           <div>University of<br />Cambridge</div>
//           <p>The University of Cambridge is a public collegiate research university in Cambridge, England. Founded in 1209,
//             the University of Cambridge is the third-oldest university in continuous operation.</p>
//         </div>
//       </div>

//       <img className='imagelogo'  src={image} alt="University Logo" />

//       <div className="contact">
//         <div className="contact-heading">CONTACT US</div>
//         <div className="contact-address">
//           The Old Schools, Trinity Ln, Cambridge CB2 1TN, UK
//         </div>

//         <div className="contact-icons">
//           <div className="phone-icon" onClick={handlePhoneClick}>
//             <img src={phonelogo} alt="Phone Icon" />
//             <span>Phone : +44 1223 337733</span>
//           </div>

//           <div className="email-icon" onClick={handleEmailClick}>
//             <img src={emaillogo} alt="Email Icon" />
//             <span>Email : info@cambridgecollege.edu</span>
//           </div>
//         </div>



//       </div>
//     </div>
//   );
// }

// export default Footer;


import React from 'react';
import "./Footer.css";
import { phonelogo, emaillogo } from "./assests";
import image from './assests/Logo.png';

const Footer = () => {

  return (
    <div className="footer-container">

      <div>
          <div className='namefooter'>
            University of<br />Cambridge
          </div>
          <p className='about'>The University of Cambridge is a public collegiate research university in Cambridge, England. Founded in 1209,
            the University of Cambridge is the third-oldest university in continuous operation.</p>
      </div>

      <img className='imagelogo' src={image} alt="University Logo" />

      <div className="contact">
        <div className="contact-heading">CONTACT US</div>
        <div className="contact-address">
          The Old Schools, Trinity Ln, Cambridge CB2 1TN, UK
        </div>

        <div className="contact-icons">

          <div className="phone-icon">
            <a href="tel:+441223337733">
              <img src={phonelogo} alt="Phone Icon" />
              <span>Phone : +44 1223 337733</span>
            </a>
          </div>
          
            <a href="mailto:info@cambridgecollege.edu" className="email-icon">
              <img src={emaillogo} alt="Email Icon" />
              <span>Email : info@cambridgecollege.edu</span>
            </a>
          </div>
        </div>
      </div>
      );
}

      export default Footer;
