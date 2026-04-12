import React from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const Bag = () => {
  const { state } = useLocation();
  const { product_detail, product_color, p_size } = state || {};
  return (
    <div className='bag'>
      <Helmet>
        <title>Bag</title>
        <link rel="shortcut icon" href="https://cdn-icons-png.flaticon.com/128/2662/2662503.png" type="image/x-icon" />
      </Helmet>
    </div>
  )
}

export default Bag
