import React, { useState, useEffect } from 'react';
import "./Table.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Table() {

    const [users, setUsers] = useState([{
        Name: "yousaf", Email: "ysf@gmail.com", Age: 20
    }])

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    }, [])

    return (
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
                                    <td className="fit">
                                        <span className='actions'>
                                            <BsFillTrashFill className="delete-btn"/>
                                            <BsFillPencilFill className="edit-btn"/>
                                        </span>
                                    </td>
                                </tr>
                            })
                        }
                </tbody> 
 


            </table>

            <button className="add-button"><Link to="/model">Add Results</Link></button>
            <button className="view-logs-button"><Link to="/action-logs">View Action Logs</Link></button>
        </div>
    );
}

