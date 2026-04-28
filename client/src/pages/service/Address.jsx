import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { GoDotFill } from "react-icons/go";
import './Address.css'
import axios from 'axios';
const Address = () => {
    const [useraddr, setuseraddr] = useState([])
    const { state } = useLocation();
    const { bag, price } = state || {};
    const [loading, setloading] = useState(false);
    useEffect(() => {
        console.log(bag);
        console.log(bag.product_name);
        console.log(price);
        const Myuser = localStorage.getItem("User");
        if (Myuser) {
            const user = JSON.parse(Myuser);
            setuseraddr(user);
            console.log(user);


        }


    }, [])
    const createOrder = async () => {
        setloading(true)
        await new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {

                    const response = await axios.post('/api/createorder', { bag });
                    console.log(response.data.newOrder);
                    resolve();
                    setloading(false)

                } catch (error) {

                }
            }, 3000);
        })
    }
    return (
        <div className='user-address'>
            <div className='user-address-wrapper'>
                <h4>Select Address</h4>

                <div className="user-address-content">
                    <input type="radio" name="" id="address-user" />
                    <label htmlFor="address-user">

                        <span>{useraddr.username}<button>Home</button></span>
                        <p>{useraddr.address},{useraddr.Pin}</p>
                        <p>Mobile : {useraddr.phone_number}</p>
                        <p><GoDotFill className='icon_18' />Pay on Delivery</p>


                    </label>
                </div>

            </div>
            <button className='place-order-btn' onClick={() => { createOrder() }}>Place Order</button>
{loading&&(
    <div className="load-wrapper">
        <div className="load-spin"></div>
        <p>Processing.........</p>
    </div>
)}
        </div>
    )
}

export default Address
