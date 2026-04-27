import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField';
import { Helmet } from 'react-helmet';
import Button from '@mui/material/Button'
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const navigate = useNavigate();
    const [userEmail, setuserEmail] = useState('');
    const [correct, setcorrect] = useState(false);
    const [err, seterr] = useState('');
    
    const {
        register: emailreg,
        handleSubmit: emailsub,
        formState: { isSubmitting: emailsubmitting }
    } = useForm();
    const {
        register: otpreg,
        handleSubmit: otpsub,
        formState: { isSubmitting: otpsubmitting }
    } = useForm();
    const HandleEmail = async (data) => {
        await new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    const response = await axios.post('/api/sendotp', data);
                    console.log(response.data);
                    setuserEmail(data.email)
                    setemailverify(true);
                    setcorrect(false);

                    resolve();
                } catch (error) {
                    setemailverify(false);
                    setcorrect(true);
                    const login_err = error.response.data.message;
                    seterr(login_err)
                    reject();
                }
            }, 3000);
        })
    }
    const HandleOTP = async (data) => {
        await new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    const newData = {
                        ...data,
                        email: userEmail
                    }
                    const response = await axios.post('/api/verifyotp', newData);
                    console.log(response.data);
                    const User = response.data.verifyuser
                    if (response.data) {
                        localStorage.setItem("User", JSON.stringify(User))
                    }
                    setcorrect(false);
                    navigate('/')
                    resolve();
                } catch (error) {
                    reject();
                    console.log(error.response.data.message);
                    setcorrect(true);
                    const invalid_otp=error.response.data.message;
                    seterr(invalid_otp);

                }
            }, 3000)
        })
    }
    const [emailverify, setemailverify] = useState(false);
    return (
        <div className='login'>
            <Helmet>
                <link rel="shortcut icon" href="/free-myntra-icon-svg-download-png-2249158.png" type="image/x-icon" />
            </Helmet>
            <div className="emil-form">
                <form onSubmit={emailsub(HandleEmail)}>
                    <div className="login-header">
                        <span className='login-heading-image'>
                            <img src="/free-myntra-icon-svg-download-png-2249158.png" alt="Error" />
                            <p>Myntra</p>
                        </span>
                        <h4>Welcome back</h4>
                        <p>Enter your email to receive a secure one-time passcode.</p>
                    </div>
                    <TextField label="Enter Your Email ID" variant='outlined' color='dark' size='small' type="email" {...emailreg("email")}
                      autoComplete="User-emails-login"
                        sx={{
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                fontFamily: 'Sora, sans-serif',
                                color: '#fff',
                                background: 'rgba(255,255,255,0.05)',
                                '&:hover fieldset': { borderColor: '#ff3f6c' },
                                '&.Mui-focused fieldset': { borderColor: '#ff3f6c' },
                            },
                            '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.4)', fontFamily: 'Sora, sans-serif' },
                            '& .MuiInputLabel-root.Mui-focused': { color: '#ff7bac' },
                        }}

                    />
                    <Button type='submit' size="large" variant='outlined' color="secondary"
                        sx={{
                            fontFamily: 'Sora, sans-serif',
                            textTransform: 'none',
                            borderRadius: '10px',
                            borderColor: '#ff3f6c',
                            color: '#ff7bac',
                            background: 'rgba(255,63,108,0.08)',
                            '&:hover': { background: 'rgba(255,63,108,0.2)', borderColor: '#ff7bac', color: '#fff' },
                            '&:active': { transform: 'scale(0.97)' },
                        }}
                    >{emailsubmitting ? (
                        <div className="send"></div>
                    ) : <div className='send-otp'>
                        <img src="/send.png" alt="Error" />
                        <p>send OTP</p>
                    </div>
                        }</Button>
                </form>
                {emailverify && (
                    <form onSubmit={otpsub(HandleOTP)}>
                        <TextField label="Verify OTP" variant='outlined' color='dark' size='small' type="text" {...otpreg("otp")} sx={{
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                fontFamily: 'Sora, sans-serif',
                                color: '#fff',
                                background: 'rgba(255,255,255,0.05)',
                                '&:hover fieldset': { borderColor: '#ff3f6c' },
                                '&.Mui-focused fieldset': { borderColor: '#ff3f6c' },
                            },
                            '& .MuiInputLabel-root': {
                                color: 'rgba(255,255,255,0.4)',
                                fontFamily: 'Sora, sans-serif',
                            },
                            '& .MuiInputLabel-root.Mui-focused': { color: '#ff7bac' },
                            '& input': { color: '#fff' },
                        }} />
                        <Button type='submit' size='small' variant='outlined' sx={{
                            fontFamily: 'Sora, sans-serif',
                            textTransform: 'none',
                            borderRadius: '10px',
                            padding: '9px 0',
                            borderColor: '#ff3f6c',
                            color: '#ff7bac',
                            background: 'rgba(255,63,108,0.08)',
                            '&:hover': {
                                background: 'rgba(255,63,108,0.2)',
                                borderColor: '#ff7bac',
                                color: '#fff',
                            },
                            '&:active': { transform: 'scale(0.97)' },
                        }}>{otpsubmitting ? (
                            <div className="send"></div>
                        ) : "verify OTP"}</Button>
                    </form>
                )}

                <div className="sign-forgot"><NavLink
                    to='/signup'>Create Account</NavLink>
                    <NavLink to='/forgot'>Forgot Password?</NavLink>
                </div>
                {correct && <p className='login-errors'>{err}</p>}
            </div>
        </div>
    )
}

export default Login
