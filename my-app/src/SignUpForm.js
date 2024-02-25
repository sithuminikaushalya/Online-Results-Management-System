//corrrected one
// import React, { useState } from 'react';
// import './SignUpForm.css';
// import { Link } from 'react-router-dom';


// const SignUpForm = () => {
//   const [formData, setFormData] = useState({
//     fname: '',
//     lname: '',
//     email: '',
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


//   return (
//     <div className="sign-form">
//       <div className="content1">
//         <div className="login-box1">
//           <h1 className="title1">Sign Up</h1>

//           <div className="input-group1">
//             <label className="label">First Name</label>
//             <input
//               className="input1"
//               type="fname"
//               name="fname"
//               value={formData.fname}
//               onChange={handleInputChange}
//               placeholder="Enter First name"
//               required
//             />
//           </div>

//           <div className="input-group1">
//             <label className="label">Last Name</label>
//             <input
//               className="input1"
//               type="lname"
//               name="lname"
//               value={formData.lname}
//               onChange={handleInputChange}
//               placeholder="Enter Last name"
//               required
//             />
//           </div>

//           <div className="input-group1">
//             <label className="label">Email</label>
//             <input
//               className="input1"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Enter Email"
//               required
//             />
//           </div>

//           <div className="input-group1">
//             <label className="label">User Name</label>
//             <input
//               className="input1"
//               type="username"
//               name="username"
//               value={formData.username}
//               onChange={handleInputChange}
//               placeholder="Enter User Name"
//               required
//             />
//           </div>
//           <div className="input-group1">
//             <label className="label">Password</label>
//             <input
//               className="input1"
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               placeholder="Enter Password"
//               required
//             />
//           </div>

//           <div className='button-group1'>
//           <button className='login-button1' >
//             <Link to="/login-page-2">Sign UP</Link>
//           </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUpForm;

// 10-24

import React, { useState } from 'react';
import './SignUpForm.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
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

  const handleSignUp = () => {
    axios.post('http://localhost:3001/signup', formData)
      .then(response => {
        if (response.status === 200) {
          alert('User registered successfully!');
        } else {
          alert('User registration failed. Please check your input and try again.');
        }
      })
      .catch(error => {
        console.error('Error during registration:', error);
      });
  };

return (
  <div className="sign-form">
    <div className="content1">
      <div className="login-box1">
        <h1 className="title1">Sign Up</h1>

        <div className="input-group1">
          <label className="label">First Name</label>
          <input
            className="input1"
            type="fname"
            name="fname"
            value={formData.fname}
            onChange={handleInputChange}
            placeholder="Enter First name"
            required
          />
        </div>

        <div className="input-group1">
          <label className="label">Last Name</label>
          <input
            className="input1"
            type="lname"
            name="lname"
            value={formData.lname}
            onChange={handleInputChange}
            placeholder="Enter Last name"
            required
          />
        </div>

        <div className="input-group1">
          <label className="label">Email</label>
          <input
            className="input1"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter Email"
            required
          />
        </div>

        <div className="input-group1">
          <label className="label">User Name</label>
          <input
            className="input1"
            type="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter User Name"
            required
          />
        </div>
        <div className="input-group1">
          <label className="label">Password</label>
          <input
            className="input1"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter Password"
            required
          />
        </div>

        <div className='button-group1'>
        <button className='login-button1'onClick={handleSignUp} >
          <Link to="/login-page-2">Sign UP</Link>
        </button>
        </div>
      </div>
    </div>
  </div>
);
}

export default SignUpForm;
