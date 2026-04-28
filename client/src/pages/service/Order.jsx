import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Order = () => {
  const { state } = useLocation();
  const { bag, price } = state || {};
  useEffect(() => {
  console.log(bag);
  console.log(price);
  
  
  }, [])
  
  return (
    <div className='user-order-details'>
   
    </div>
  )
}

export default Order
