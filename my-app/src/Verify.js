import React from 'react';
import './Verify.css';
import backgroundverify from './assests/continuepage.png';
import { Link } from 'react-router-dom';

function Verify() {
    return (
        <div className="verifypage-container">
            <img className='backgroundverify' src={backgroundverify} alt="student3" />

            <div className="name-verify">
                <p >
                    We sent you email. Please Check and
                    Verify it.
                </p>
                <button className='continue-button' >
                    <Link to="/login-page-2">continue</Link>
                </button>
            </div>

        </div>
    );
}

export default Verify;