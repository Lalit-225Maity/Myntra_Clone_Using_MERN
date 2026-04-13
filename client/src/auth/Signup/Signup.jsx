import React from 'react'
import './Signup.css'
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Signup = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm();
    const handleEmail = async (data) => {
        await new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    const response = await axios.post('/api/createuser', data);
                    console.log(response.data);
                    const response2 = await axios.post('/api/sendotp', data);
                    console.log(response2.data);
                    navigate('/otp', { state: { email: response.data.Users.email } });
                    resolve();
                } catch (error) {
                    reject();
                    console.log(error.response.data.message);

                }

            }, 3000);
        })
    }
    return (
        <div className='account'>
            <div className="signup-form">
                <h4>Create Account</h4>
                <form onSubmit={handleSubmit(handleEmail)}>
                    <TextField label="Write Your Name" {...register("username")} type="text" variant="outlined" size="small" color="success" required/>
                    <TextField label="Write Your Email ID" {...register("email")} type="email" variant="outlined" size="small" color="success"  required />
                    <TextField label="Address" {...register("address")} type="text" variant="outlined" size="small" color="success"  required/>
                    <TextField label="Mobile Number" {...register("phone_number")} type="text" variant="outlined" size="small" color="success" required />
                    <TextField label="Pin Code Number" {...register("Pin")} type="text" variant="outlined" size="small" color="success"  required/>
                    <Button variant="outlined" type="submit" color="success">{isSubmitting ? (
                        <div className="loading"></div>
                    ) : "sign up"}</Button>
                </form>
            </div>

        </div>
    )
}

export default Signup
