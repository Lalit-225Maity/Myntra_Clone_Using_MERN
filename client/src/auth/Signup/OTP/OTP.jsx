import React from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './OTP.css'
const OTP = () => {
    const { state } = useLocation();
    const { email } = state || {};
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm();
    const verifyemail = async (data) => {
        await new Promise((resolve, reject) => {
            setTimeout(async () => {

                try {
                    const update_data = {
                        ...data,
                        email: email
                    }
                    const response = await axios.post('/api/verifyotp', update_data);
                    console.log(response.data);
                    const User = response.data.verifyuser
                    if (response.data) {
                        localStorage.setItem("User", JSON.stringify(User))
                    }
                    resolve();
                    navigate('/')
                } catch (error) {
                    reject(error)
                }
            }, 3000);
        })
    }
    return (
        <div className='otp'>
            <form onSubmit={handleSubmit(verifyemail)}>
                <div className="heading">
                    <h5>A OTP code has been sent to the given Email ID </h5>
                </div>
                <TextField
                    label="Verify Email"
                    variant="outlined"
                    size="small"
                    {...register("otp")}

                />
                <button type='submit'>{isSubmitting ? (
                    <div className="loading"></div>
                ) : "verify"}</button>
            </form>
        </div>
    )
}

export default OTP
