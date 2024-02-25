import React from 'react';
import './ResetPassword.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


function ResetPassword() {
    return (
        <div className="resetpage-container">
            

            <div className="discription">
                <p >
                    To reset your password, submit your user name or your email address below. If we can find you in the
                    database, an email will be sent to your email address, with instruction how to reset your password.
                </p>
            </div>
            <div className="reset-form">
                <div className="content-reset">
                    <div className="login-box-reset">
                        <h1 className="title-reset">Reset Password</h1>

                        <div className="input-group-reset">
                            <label className="labe-reset">Search by user name</label>
                            <input
                                className="input-reset"
                                type="uname"
                                placeholder="User Name"
                            />
                        </div>

                        <div className="input-group1">
                            <label className="labe-reset">Search by email</label>
                            <input
                                className="input-reset"
                                type="email"
                                placeholder="Email"
                            />
                        </div> 
                        <div className='button-group-reset'>
                            <button className='reset-button' >
                                <Link to="/verify-page">Search</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;