import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './style.css'

import { handleKeyDown, handleKeyPress, isNameValid, isEmailValid, isMobileValid } from '../utils';
import { Button } from 'react-bootstrap';

export default function Register({ showRegister, handleClose, showLogin }) {
    const navigateData = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [signupData, setSignupData] = useState({ email: '', fname: '', lname: '', mobile: '', password: '' });



    function handleUpdate(event) {
        const targetName = event.target.name;
        const targetVal = event.target.value;
        setSignupData(prevData => ({
            ...prevData,
            [targetName]: targetVal
        }));
    }

    function handleSubmit() {
        setIsSubmitted(true);

    }

    return (
        <>
            <Modal
                show={showRegister}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sign up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <div className='login-layout'>
    
                            <div>
                                <p className='mb-0 mt-2 dark-black letter-spacing-32'>First name</p>
                                <div className='input-div'>
                                    <input
                                        type="text"
                                        name="fname"
                                        required
                                        value={signupData.fname}
                                        onChange={handleUpdate}
                                        className={`h-45 form-input dark-black ${((isSubmitted && !signupData.fname) || (signupData.fname && !isNameValid(signupData.fname))) ? 'input-error' : ''}`}
                                    />
                                </div>

                                {isSubmitted && !signupData.fname && <p className='mb-0 text-error'>First name is required.</p>}
                                {signupData.fname && !isNameValid(signupData.fname) && <p className='mb-0 text-error'>Please enter a valid name.</p>}
                            </div>
                            <div>
                                <p className='mb-0 mt-2 dark-black letter-spacing-32'>Last name</p>
                                <div className='input-div'>
                                    <input
                                        type="text"
                                        name="lname"
                                        required
                                        value={signupData.lname}
                                        onChange={handleUpdate}
                                        className={`h-45 form-input dark-black ${((isSubmitted && !signupData.lname) || (signupData.lname && !isNameValid(signupData.lname))) ? 'input-error' : ''}`}
                                    />
                                </div>

                                {isSubmitted && !signupData.lname && <p className='mb-0 text-error'>Last name is required.</p>}
                                {signupData.lname && !isNameValid(signupData.lname) && <p className='mb-0 text-error'>Please enter a valid name.</p>}
                            </div>

                            <div>
                                <p className='mb-0 dark-black letter-spacing-32 mt-3'>Email ID</p>
                                <input
                                    type='email'
                                    name="email"
                                    value={signupData.email}
                                    onChange={(e) => {
                                        handleUpdate(e)
                                        isEmailValid(e)
                                    }}
                                    className={`h-45 form-input dark-black ${((isSubmitted && !signupData.email) || (signupData.email && !isEmailValid(signupData.email))) ? 'input-error' : ''}`}
                                />

                                {isSubmitted && !signupData.email && <p className='mb-0 text-error'>Email is required.</p>}
                                {!isSubmitted && signupData.email && !isEmailValid(signupData.email) && <p className='mb-0 text-error'>Please enter a valid Email.</p>}
                            </div>
                            <div>
                                <p className='mb-0 mt-3 dark-black letter-spacing-32'>Password</p>
                                <div className='input-div'>
                                    <input
                                        type="password"
                                        name="password"
                                        required
                                        value={signupData.password}
                                        onChange={handleUpdate}
                                        className={`h-45 form-input dark-black ${((isSubmitted && !signupData.password)) ? 'input-error' : ''}`}
                                    />
                                </div>
                                {isSubmitted && !signupData.password && <p className='mb-0 text-error'>Password is required.</p>}
                            </div>
                            <p className='mb-0 letter-spacing-32 mt-3'>Mobile</p>
                            <div className={`otp-send `}>

                                <input
                                    type="text"
                                    name="mobile"
                                    value={signupData.mobile}
                                    maxLength="10"
                                    onChange={handleUpdate}
                                    onKeyDown={handleKeyDown} onKeyPress={handleKeyPress}
                                    onWheel={(e) => e.target.blur()}
                                    className={`h-45 form-input dark-black ${((isSubmitted && !signupData.mobile) || (signupData.mobile && !isMobileValid(signupData.mobile))) ? 'input-error' : ''}`}
                                />
                            </div>

                            {(isSubmitted && !signupData.mobile) ? <span className='mb-0 text-error fs-14'>Mobile is required.</span> : null}
                            {signupData.mobile && !isMobileValid(signupData.mobile) && <span className='text-error fs-14'>Please enter a valid Mobile no.</span>}

                            <div className='d-flex mb-15 mt-25'>
                                <Button

                                    className='login-btn w-100 mt-3'
                                    onClick={handleSubmit}
                                >Register</Button>
                            </div>

                            <div
                                className='mt-2'
                            >
                                Already have an account? <Button
                                className='login-btn'
                                    onClick={()=> {
                                        handleClose()
                                        showLogin()
                                    }}
                                    style={{fontWeight: 700}}
                                >Log in now!</Button>
                            </div>
                        </div>
            
                </Modal.Body>

            </Modal>

        </>

    )
}