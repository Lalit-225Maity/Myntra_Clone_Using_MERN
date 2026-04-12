import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const navigate = useNavigate();
    const [userEmail, setuserEmail] = useState('');
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
                     
                    resolve();
                } catch (error) {
                    setemailverify(false);
                    reject();
                }
            }, 3000);
        })
    }
    const HandleOTP=async(data)=>{
         await new Promise((resolve, reject) => {
            setTimeout(async () => {
                 try {
                    const newData={
                    ...data,
                    email:userEmail
                }
                const response=await axios.post('/api/verifyotp',newData);
                console.log(response.data);
                const User=response.data.verifyuser
                if(response.data){
                    localStorage.setItem("User",JSON.stringify(User))
                }
                navigate('/')
                resolve();
                 } catch (error) {
                    reject();
                    console.log(error.response.data.message);
                    
                 }
            },3000)
    })
}
    const [emailverify, setemailverify] = useState(false);
    return (
        <div className='login'>
            <div className="emil-form">
                <form onSubmit={emailsub(HandleEmail)}>
                    <TextField label="Enter Your Email ID" variant='outlined' color='dark' size='small' type="email" {...emailreg("email")} />
                    <Button type='submit' size='small' variant='outlined'>{emailsubmitting ? (
                        <div className="send"></div>
                    ) : "send OTP"}</Button>
                </form>
                {emailverify && (
                    <form onSubmit={otpsub(HandleOTP)}>
                        <TextField label="Verify OTP" variant='outlined' color='dark' size='small' type="text" {...otpreg("otp")} />
                        <Button type='submit' size='small' variant='outlined'>{otpsubmitting ? (
                            <div className="send"></div>
                        ) :"verify OTP"}</Button>
                    </form>
                )}
                <div className="sign-forgot"><NavLink
                    to='/signup'>Create Account</NavLink>
                        <NavLink to='/forgot'>Forgot Password?</NavLink>
                    </div>
            </div>
        </div>
    )
}

export default Login
