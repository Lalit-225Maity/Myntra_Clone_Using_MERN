import React from 'react'
import { useLocation } from 'react-router-dom'

const Order = () => {
    const{state}=useLocation();
    const{bag,price}=state;
  return (
    <div style={{marginTop:"116px"}}> 
      <h4>Hello Lalit </h4>
      <h5></h5>
    </div>
  )
}

export default Order
