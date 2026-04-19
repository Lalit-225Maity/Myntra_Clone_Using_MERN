import React from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { TiTick } from "react-icons/ti";
import { MdCurrencyRupee } from "react-icons/md";
import { useState } from 'react'
import './Bag.css'
const Bag = () => {
  const [bags, setbags] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/api/getbag');
        console.log(response.data.checkUser);
        setbags(response.data.checkUser);

      } catch (error) {

        console.error('Error fetching bag:', error);
      }
    })();
  }, [])
  const RemoveItem = async (_id) => {
    const response = await axios.post('/api/removeitems', { _id });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
  return (
    <div className='bag'  >
      <Helmet>
        <title>Bag</title>
        <link rel="shortcut icon" href="https://cdn-icons-png.flaticon.com/128/2662/2662503.png" type="image/x-icon" />
      </Helmet>
      <div className="bag-items-details">

        <div className="bag-items">
          {bags.length > 0 ? bags.map((i) => (
            <div className="bag-product-coontainer"  >
              <img src={i.image} alt="" />
              <div className="product-details-section">
                <h4>{i.product_brand}</h4>
                <p>{i.product_name}</p>
                <p>size:{i.size}</p>
                <span className='price-section'>
                  <MdCurrencyRupee className='icon_30' />
                  <p>{i.product_price}</p>
                </span>
                <span className='delivery-time'>
                  <TiTick className='icon_30'/>
                  <p>Delivery by {new Date(i.delivery_date).toDateString()}</p>
                </span>
              </div>
              <button onClick={()=>{RemoveItem(i._id)}} className='remove-button'>Remove</button>
            </div>
          )) : <div className="image-bag">
            <img src="/cart.png" alt="" />
            <h5>Your Bag is Empty</h5>
          </div>}
        </div>

      </div>
    </div>
  )
}

export default Bag
