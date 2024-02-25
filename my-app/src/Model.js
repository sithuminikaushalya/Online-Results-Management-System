import React, { useState } from "react";
import "./Model.css";
import { Link } from 'react-router-dom';
import axios from "axios";

export const Model = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      regNo: "",
      caMarks: "",
      endMarks: "",
      gpa: "",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.regNo && formState.caMarks && formState.endMarks && formState.gpa) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formState.regNo, formState.caMarks, formState.endMarks, formState.gpa);

    if (!validateForm()) return;

    axios.post("http://localhost:3001/createUser", {regNo:(formState.regNo), caMarks:(formState.caMarks), endMarks:(formState.endMarks), gpa:(formState.gpa)})
    .then(result => {
        console.log(result) 
        })
    .catch(err => console.log(err));

    //onSubmit(formState);

    //closeModal();
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="regNo">Reg No</label>
            <input name="regNo" 
            onChange={handleChange} value={formState.regNo} />
          </div>
          <div className="form-group">
            <label htmlFor="caMarks">CA Marks</label>
            <input name="caMarks" 
            onChange={handleChange} value={formState.caMarks} />
          </div>
          <div className="form-group">
            <label htmlFor="endMarks">End Exam Marks</label>
            <input name="endMarks" 
            onChange={handleChange} value={formState.endMarks} />
          </div>
          <div className="form-group">
            <label htmlFor="gpa">GPA</label>
            <input name="gpa" 
            onChange={handleChange} value={formState.gpa} />
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" 
          onClick={handleSubmit}>Submit</button>
          <button className="add-button"><Link to="/result">Back to Table</Link></button>
        </form>
      </div>
    </div>
  );
};

export default Model;
