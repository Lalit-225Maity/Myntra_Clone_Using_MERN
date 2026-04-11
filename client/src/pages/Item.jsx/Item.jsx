import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FaRegStar } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { VscPercentage } from "react-icons/vsc";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Item.css'
const Item = () => {
    const navigate=useNavigate();
    const{register,watch}=useForm()
    const{state}=useLocation();
    const{product_detail}=state||{};
    const DP=Math.ceil((product_detail.price) * 10);
    const OP=Math.ceil((product_detail.price) * 10) + Math.floor((product_detail.discountPrice) * 10)
    const Per=((OP-DP)/OP)*100;
    const p_size=watch("size");
useEffect(() => {
   console.log(p_size);
   
}, [p_size])

  return (
    <div className='items'>
      <div className="user-product-image">
        <img src={product_detail.images_url} alt="" />
      </div>
      <div className="product-full-details">
        <p>{product_detail.brand}</p>
        <p>{product_detail.name}</p>
        <div className="product-rating">
           <FaRegStar className='icon_20'/> <p>{product_detail.rating}</p>
        </div>
        <div className="discount-offer">
            <p><FaRupeeSign className='icon_20'/>{Math.ceil((product_detail.price) * 10)}</p>
                            <p style={{ textDecoration: "line-through" }}>MRP <FaRupeeSign className='icon_20'/>{Math.ceil((product_detail.price) * 10) + Math.floor((product_detail.discountPrice) * 10)}</p>
                            <p>({Math.ceil(Per)}<VscPercentage className='icon_20'/> Off.)</p>
        </div>
        <div className="product-size">
            {product_detail.sizes.map((i,key)=>(
               <span  >
                   <input type="radio" {...register("size")}  value={i} id={key}/>
                   <label htmlFor={key}>{i}</label>
               </span>
            ))}
        </div>
        <div className="bag-wish">
            <button onClick={()=>{navigate('/bag')}}>Add to Bag</button>
            <button onClick={()=>{navigate('/wish')}}>Wishlist</button>
        </div>
      </div>
    </div>
  )
}

export default Item
