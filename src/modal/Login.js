import React, { useState, useEffect, useRef } from 'react'
import { Button, Modal } from 'react-bootstrap';
import './style.css'
import { Link, useNavigate } from 'react-router-dom'

import { handleKeyDown, handleKeyPress, handlePasswordValidation, isEmailValid } from '../utils';
let loginData = {
    email: "",
    password: ""
};
const Login = ({ show, handleClose, showRegister }) => {


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
                        <div className='login-layout'>
                            <div className='align-items-center d-flex'>
                                <label className='dark-blue'>Email</label>
                            </div>
                            <div className='input-div'>
                                <input type="email"
                                    className={`form-input ${((isSubmitted && !loginVal.email) || (loginVal.email && !isEmailValid(loginVal.email))) ? 'input-error' : ''}`}
                                    id="j_username" name="email"
                                    onChange={(e) => {
                                        handleUpdate(e);
                                        isEmailValid(e)
                                    }
                                    }
                                    value={loginVal.email} />
                            </div>

                            {loginVal.email && !isEmailValid(loginVal.email)&& <span className='text-error'>Please enter a valid email id.</span>}
                            {(isSubmitted && !loginVal.email) ? <span className='text-error'>Email is required.</span> : null}

                            <div className='mt-3'>
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

                            <div className='d-flex justify-content-between mt-2 '>
                                <div className="pull-left">
                                    <input type="checkbox" id="check" />
                                    <label className="me-8 line-height-24" htmlFor="rememberMe">Remember me</label>
                                </div>
                                <div className="pull-right" >
                                    <Link to="/" className="forgotPassLink">Forgot password?</Link>

                                </div>
                            </div>

                            <Button className='login-btn mt-3' onClick={handleSubmit}>Log in</Button>
                            
                            <div className='login-text mt-3'>
                                Don’t have an account? <Button onClick={()=> {
                                        handleClose()
                                        showRegister()
                                    }}
                                    style={{fontWeight: 700}} className='login-btn'>Sign up</Button>
                            </div>
                        </div>

                </Modal.Body>

            </Modal>


        </>

    )
}

export default Login