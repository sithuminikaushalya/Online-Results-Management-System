import React, {useState, useEffect} from 'react';
import './Results.css';
import "./Table.css";
import logo from './assests/navbarLogo.png';
import {Link} from 'react-router-dom';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import axios from "axios";
import Table from './Table';

export default function Results() {

const [users, setUsers] = useState([{
    Name: "yousaf", Email: "ysf@gmail.com", Age: 20
}])

useEffect(() => {
  axios.get('http://localhost:3001/result')
  .then(result => setUsers(result.data))
  .catch(err => console.log(err))
}, [])

const handleDelete = (id) => {
        axios.delete("http://localhost:3001/deleteUser/" + id)
        .then(res => {console.log(res)
        window.location.reload() })
        .catch(err => console.log(err))

    }


  return (
    <div className="loginpage-container-result">
      <img className='logoresult' src={logo} alt="Cambridge University Logo" />

      <div className="nameresult">
        <p >
          Engineering Faculty
          <br /> <br />
          Cambridge University
        </p>
      </div>

      <div className="links">
        <ul >
          <li>
            <a href="#" className="log-out-btn"><Link to="/login-page-1">Log Out</Link></a>
          </li>
        </ul>
      </div> 

      <div className='table-wrapper'>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='reg-no'> Reg No </th>
                        <th className='ca-marks'> CA Marks </th>
                        <th className='end-marks'> End Exam Marks </th>
                        <th> GPA </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>

                  {
                    users.map((user) => {
                      return    <tr>
                          <td>{user.regNo}</td>
                          <td>{user.caMarks}</td>
                          <td>{user.endMarks}</td>
                          <td>{user.gpa}</td>
                          <td></td>
                          <td className="fit">
                            <span className='actions'>

                              <BsFillTrashFill className="delete-btn"  
                                        onClick={(e) => handleDelete(user._id)}/>

                              <Link to={`/updateUser/${user._id}`}>
                                <BsFillPencilFill className="edit-btn" />
                              </Link>

                            </span>
                          </td>
                      </tr>
                  })
                  }  
                </tbody>
            </table>

            <button className="add-button"><Link to ="/model">Add Results</Link></button>
            
        </div>

    </div>
  );
}

 