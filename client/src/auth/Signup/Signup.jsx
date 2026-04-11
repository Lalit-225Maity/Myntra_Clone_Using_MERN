import React from 'react'
import './Signup.css'
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate=useNavigate();
    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm();
    const handleEmail = async(data) => {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(data);
                navigate('/otp')
                resolve();
                
            }, 3000);
        })
    }
    return (
        <div className='account'>
            <h4>Create Account</h4>
            <form onSubmit={handleSubmit(handleEmail)}>
                <TextField label="Write Your Name" {...register("username")} type="text" variant="outlined" size="small" color="success" />
                <TextField label="Write Your Email ID" {...register("email")} type="email" variant="outlined" size="small" color="success" />
                <TextField label="Address" {...register("address")} type="text" variant="outlined" size="small" color="success" />
                <TextField label="Mobile Number" {...register("phonenumber")} type="text" variant="outlined" size="small" color="success" />
                <TextField label="Pin Code Number" {...register("Pin")} type="text" variant="outlined" size="small" color="success" />
                <Button variant="outlined" type="submit">{isSubmitting ? (
                    <div className="loading"></div>
                ) : "sign up"}</Button>
            </form>
        </div>
    )
}

export default Signup
