// import React from 'react';
// import './LoginForm.css';
// import { Link } from 'react-router-dom';

// const LoginForm = () => {
//   return (
//     <div className="login-form">
//       <div className="overlay"></div>
//       <div className="content">
//         <div className="login-box">
//           <h1 className="title">Login</h1>
//           <div className="input-group">
//             <label className="label">User Name</label>
//             <input
//               className="input"
//               type="text"
//               placeholder="Enter User Name"
//             />
//           </div>
//           <div className="input-group">
//             <label className="label">Password</label>
//             <input
//               className="input"
//               type="password"
//               placeholder="Enter Password"
//             />
//           </div>
//           <div className='button-group'>
//             <div className='flex flex-col mt-2'>
//               <a href='#' className='forgot-password'>Forgot Password?</a>
//             </div>
//             <button className='login-button'>
//             <Link to="/result">Login</Link>
//             </button>
//           </div>


//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;

//corrected code
// import React, { useState } from 'react';
// import './LoginForm.css';
// import { Link } from 'react-router-dom';

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const { username, password } = formData;

//     if (username === 'lec1' && password === 'user123') {
//       window.location.href = '/result';
//     } else {
//       alert('Invalid credentials. Please try again.');
//     }
//   };

// return (
//   <div className="login-form">
//     {/* <div className="overlay"></div> */}
//     <div className="content">
//       <div className="login-box">
//         <h1 className="title">Sign In</h1>
//         <div className="input-group">
//           <label className="label">User Name</label>
//           <input
//             className="input"
//             type="username"
//             name="username"
//             value={formData.username}
//             onChange={handleInputChange}
//             placeholder="Enter User Name"
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label className="label">Password</label>
//           <input
//             className="input"
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             placeholder="Enter Password"
//             required
//           />
//         </div>

//         <div className='button-group'>
//           <a href='#' className='forgot-password'>Forgot Password?</a>
//           <a href='#' className='Sign-Up'>
//           <Link to="/sign-up">Sign Up</Link>
//           </a>
//         </div>
//         <button className='login-button' onClick={handleSubmit}>
//           <Link to="/result">Sign In</Link>
//         </button>
//       </div>
//     </div>
//   </div>
// );
// }

// export default LoginForm;


//10-24
//save 


import React, { useState } from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSignIn = () => {
    axios.post('http://localhost:3001/signin', formData)
      .then(response => {
        if (response.status === 200) {
          window.location.href = '/result';
        } else {
          alert('Invalid credentials. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error during sign-in:', error);
      });
  };
  return (
    <div className="login-form">
      {/* <div className="overlay"></div> */}
      <div className="content">
        <div className="login-box">
          <h1 className="title">Sign In</h1>
          <div className="input-group">
            <label className="label">User Name</label>
            <input
              className="input"
              type="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter User Name"
              required
            />
          </div>
          <div className="input-group">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              required
            />
          </div>

          <div className='button-group'>
            <a href='#' className='forgot-password'>
              <Link to="/reset">Forgot Password?</Link>
            </a>
            <a href='#' className='Sign-Up'>
              <Link to="/sign-up">Sign Up</Link>
            </a>
          </div>
          <button className='login-button' onClick={handleSignIn}>
            <Link to="/result">Sign In</Link>
          </button>
        </div>
      </div>
    </div>
  );

};

export default LoginForm;
