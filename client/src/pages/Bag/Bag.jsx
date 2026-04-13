import React from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
const Bag = ({setcount}) => {
 
 useEffect(() => {
    (async()=>{
      try {
        const response=await axios.get('/api/getbag');
        console.log(response.data.checkUser);
        setcount(response.data.checkUser.length);
      } catch (error) {
        
      }
    })();
 }, [])
 
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
