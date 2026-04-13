import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FaRegStar } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import axios from 'axios'
import { VscPercentage } from "react-icons/vsc";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'
const Item = () => {
  const [product_color, setproduct_color] = useState('');
  const navigate = useNavigate();
  const { register, watch } = useForm()
  const { state } = useLocation();
  const { product_detail } = state || {};
  const DP = Math.ceil((product_detail.price) * 10);
  const OP = Math.ceil((product_detail.price) * 10) + Math.floor((product_detail.discountPrice) * 10)
  const Per = ((OP - DP) / OP) * 100;

  const p_size = watch("size");
  const date = new Date();
  const ToBag = () => {
    setTimeout(async () => {
      try {
        const response = await axios.post('/api/createbag', {
          product_name: product_detail.name, product_brand: product_detail.brand, product_price: Math.ceil((product_detail.price) * 10), delivery_date: date.setDate(date.getDate() + 5), size: p_size, image: product_detail.
            images_url
        });
        console.log(response.data);
      } catch (error) {

        console.log(error.response.data.message);

      }
    }, 3000);
  }

  return (
    <div className='items'>
      <div className="user-product-image">
        <img src={product_detail.images_url} alt="" />
      </div>
      <div className="product-full-details">
        <p>{product_detail.brand}</p>
        <p>{product_detail.name}</p>
        <p>{product_detail.description}</p>
        <div className="product-rating">
          <FaRegStar className='icon_20' /> <p>{product_detail.rating}</p>
        </div>
        <div className="discount-offer">
          <p><FaRupeeSign className='icon_20' />{Math.ceil((product_detail.price) * 10)}</p>
          <p style={{ textDecoration: "line-through" }}>MRP <FaRupeeSign className='icon_20' />{Math.ceil((product_detail.price) * 10) + Math.floor((product_detail.discountPrice) * 10)}</p>
          <p>({Math.ceil(Per)}<VscPercentage className='icon_20' /> Off.)</p>
        </div>
        <h4>SELECT SIZE</h4>
        <div className="product-size">

          {product_detail.sizes.map((i, key) => (
            <span  >
              <input type="radio" {...register("size")} value={i} id={key} />
              <label htmlFor={key}>{i}</label>
            </span>
          ))}
        </div>
        <h4>SLECET COLORS</h4>
        <div className="product-colors-select">
          {product_detail.colors.map((i) => (
            <div className="choose-color">
              <input type="radio" id={i} name='colors' value={i} onChange={(e) => { setproduct_color(e.target.value); }} checked={product_color === i} />
              <label htmlFor={i}>{i}</label>
            </div>
          ))}
        </div>
        <div className="bag-wish">
          <button onClick={() => { ToBag() }}>Add to Bag</button>
          <button onClick={() => { navigate('/wish') }}>Wishlist</button>
        </div>
      </div>
    </div>
  )
}

export default Item
