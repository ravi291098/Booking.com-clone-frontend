import React, { useState, useEffect, useRef } from 'react'
import { Button, Modal } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom'

import { handleKeyDown, handleKeyPress, handlePasswordValidation, isEmailValid } from '../utils';
let loginData = {
    email: "",
    password: ""
};
const Login = ({ show, handleClose }) => {


    const [isSubmitted, setIsSubmitted] = useState(false);

    const [loginVal, setLoginVal] = useState({ ...loginData });

    function handleUpdate(event) {
        const targetName = event.target.name;
        const targetVal = event.target.value;
        setLoginVal((prevData) => ({
            ...prevData,
            [targetName]: targetVal,
        }));
    }


    function handleSubmit() {
        setIsSubmitted(true);
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='login-container'>
                        <div className='login-layout'>
                            <div className='align-items-center d-flex'>
                                <label className='dark-blue'>Email</label>
                            </div>
                            <div className='input-div'>
                                <input type="email"
                                    className={`form-input ${((isSubmitted && !loginVal.email) || (loginVal.email)) ? 'input-error' : ''}`}
                                    id="j_username" name="email"
                                    onChange={(e) => {
                                        handleUpdate(e);
                                        isEmailValid(e)
                                    }
                                    }
                                    value={loginVal.email} />
                            </div>

                            {loginVal.email && <span className='text-error'>Please enter a valid email id.</span>}
                            {(isSubmitted && !loginVal.email) ? <span className='text-error'>Email is required.</span> : null}

                            <div className='mt-30'>
                                Password
                                <div className='input-div'>
                                    <input type="password"
                                        className={`form-input ${((isSubmitted && !loginVal.password) || (loginVal.password && !handlePasswordValidation(loginVal.password))) ? 'input-error' : ''}`}
                                        onChange={(e) => {
                                            handleUpdate(e)
                                            handlePasswordValidation(e)
                                        }}
                                        value={loginVal.password}
                                        name='password' />
                                </div>
                            </div>
                            {loginVal.password && !handlePasswordValidation(loginVal.password) && <span className='text-error'>Password should be minimum 6 characters.</span>}
                            {(isSubmitted && !loginVal.password) ? <span className='text-error'>Password is required.</span> : null}

                            <div className='forgot-password-div '>
                                <div className="pull-left">
                                    <input type="checkbox" id="check" />
                                    <label className="me-8 line-height-24" htmlFor="rememberMe">Remember me</label>
                                </div>
                                <div className="pull-right" >
                                    <Link to="/forgotpassword" className="forgotPassLink">Forgot password?</Link>

                                </div>
                            </div>

                            <button className='login-btn' onClick={handleSubmit}>Log in</button>
                            <div className='border-div'></div>
                            <div className='login-text'>
                                Don’t have an account? <Link to="/register">Sign up</Link>
                            </div>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>


        </>

    )
}

export default Login