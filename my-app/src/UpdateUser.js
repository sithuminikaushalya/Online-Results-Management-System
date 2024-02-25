import React, { useState, useEffect } from "react";
import "./Model.css";
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UpdateUser() {

    const {id} = useParams(); 
    const [regNo, setRegNo] = useState();
    const [caMarks, setCaMarks] = useState();
    const [endMarks, setEndMarks] = useState();
    const [gpa, setGpa] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/' + id)
        .then(result => {console.log(result)
            setRegNo(result.data.regNo)
            setCaMarks(result.data.caMarks)
            setEndMarks(result.data.endMarks)
            setGpa(result.data.gpa)
        })
        .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/" + id, {regNo, caMarks, endMarks, gpa})
        .then(result => {
            console.log(result)
            //navigate('/') 
            })
        .catch(err => console.log(err));
        }

 
  return (
    <div className="modal-container">
      <div className="modal">
        <form onSubmit={Update}>
          <div className="form-group">
            <label htmlFor="regNo">Reg No</label>
            <input name="regNo" value={regNo} 
            onChange={(e) => setRegNo(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="caMarks">CA Marks</label>
            <input name="caMarks" value={caMarks} 
            onChange={(e) => setCaMarks(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="endMarks">End Exam Marks</label>
            <input name="endMarks" value={endMarks} 
            onChange={(e) => setEndMarks(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="gpa">GPA</label>
            <input name="gpa" value={gpa} 
            onChange={(e) => setGpa(e.target.value)}/>
          </div>
           
          <button type="submit" className="btn">Update</button>
          <button className="add-button"><Link to="/result">Back to Table</Link></button>
        </form>
      </div>
    </div>
  );
}; 