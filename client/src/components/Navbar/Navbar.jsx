import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import './Navbar.css'
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="/free-myntra-icon-svg-download-png-2249158.png" alt="" />
      <div className="pages-headings">
        <NavLink to='men' className={(e)=>{return e.isActive?"active":"not-active"}}>MEN</NavLink>
        <NavLink to='women' className={(e)=>{return e.isActive?"active":"not-active"}}>WOMEN</NavLink>
        <NavLink to='/' className={(e)=>{return e.isActive?"active":"not-active"}}>HOME</NavLink>
        <NavLink to='kids' className={(e)=>{return e.isActive?"active":"not-active"}}>KIDS</NavLink>
      </div>
      <div className="search-product">
        <IoSearch className='icon_1' />
        <input type="text" />
      </div>
      <div className="navbar-right">
        <div className="profile"><CiUser className='icon_2' />Profile</div>
        <div className="wishlist"><CiHeart className='icon_2' />Wishlist</div>
        <div className="bag"><IoBagOutline className='icon_2' />Bag</div>
      </div>
    </div>
  )
}

export default Navbar
