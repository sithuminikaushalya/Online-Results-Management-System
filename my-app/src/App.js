import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./HomePage";
import Login1 from "./Login1";
import Login2 from "./Login2";
import Results from "./Results";
import Model from "./Model"; 
import UpdateUser from './UpdateUser';
import SignUp from './SignUp';
import ActionLogTable from './ActionLogTable';
import ResetPassword from './ResetPassword';
import Verify from './Verify';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-page-1" element={<Login1 />} />
        <Route path="/login-page-2" element={<Login2 />} />
        <Route path='/sign-up' element={<SignUp/>} /> 
        <Route path="/result" element={<Results />} />
        <Route path='/model' element={<Model/>} /> 
        <Route path='/updateUser/:id' element={<UpdateUser/>} />
        <Route path="/action-logs" element={<ActionLogTable />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </Router>
  );
} 

export default App;