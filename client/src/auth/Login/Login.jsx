import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm();
  const handleEmailSend = async (data) => {
    await new Promise((resolve, reject) => {
      setTimeout(async() => {
         try {
          console.log(data);
        const response=await axios.post('/api/login',data);
        console.log(response.data);
        
        resolve();
         } catch (error) {
          reject();
         }
      }, 3000);
    })

  }
  return (
    <div className='login'>
      <form onSubmit={handleSubmit(handleEmailSend)}>
        <div className="heading">
          <h4>Myntra</h4>
          <p>India's fashion & lifestyle destination</p>
        </div>
        <TextField label="Email ID" variant="outlined" color="dark" size='small' {...register("email")} />
        <Button variant="outlined"  size='small' type="submit">{isSubmitting ? (
          <div className="load"></div>
        ) : "Login with OTP"}</Button>
        <div className="forgot-signup">
          <NavLink to='/signup'>Create Account</NavLink>
        </div>
      </form>
    </div>
  )
}

export default Login
