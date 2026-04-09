import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import './Navbar.css'
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Navbar = ({search,setsearch}) => {
  const navigate = useNavigate();
  const [profiledetail, setprofiledetail] = useState(false);
 
  const Searchdata = (e) => {
    const value = e.target.value
    console.log(value);
    setsearch(value)

  }
  const handleEnter=(e)=>{
    if(e.key==='Enter'){
      navigate('search')
    }
  }
  return (
    <div className='navbar'>
      <img src="/free-myntra-icon-svg-download-png-2249158.png" alt="" onClick={() => { navigate('/') }} />
      <div className="pages-headings">
        <NavLink to='men' className={(e) => { return e.isActive ? "active" : "not-active" }}>MEN</NavLink>
        <NavLink to='women' className={(e) => { return e.isActive ? "active" : "not-active" }}>WOMEN</NavLink>
        <NavLink to='/' className={(e) => { return e.isActive ? "active" : "not-active" }}>HOME</NavLink>
        <NavLink to='kids' className={(e) => { return e.isActive ? "active" : "not-active" }}>KIDS</NavLink>
      </div>
      <div className="search-product">
        <IoSearch className='icon_1' />
        <input type="text" placeholder='search your product' value={search} onChange={Searchdata}  onKeyDown={handleEnter}/>
      </div>
      <div className="navbar-right">
        <div className="profile-wrapper" onMouseEnter={() => { setprofiledetail(true) }} onMouseLeave={() => { setprofiledetail(false) }}>
          <NavLink className={(e) => { return e.isActive ? "active" : "not-active" }} to='profile'><CiUser className='icon_2' />Profile

          </NavLink>
          {profiledetail && (
            <div className="user-login-order">
              <button onClick={(e) => { navigate('/login'); e.stopPropagation() }}>Login</button>
              <div className="user-order">
                <p>Orders</p>
                <p>Wishlist</p>
                <p>Gift Cards</p>
                <p>Contact Us</p>
                <p>Myntra Insider</p>
              </div>
            </div>
          )}
        </div>
        <NavLink className={(e) => { return e.isActive ? "active" : "not-active" }} to='wish'><CiHeart className='icon_2' />Wishlist</NavLink>
        <NavLink className={(e) => { return e.isActive ? "active" : "not-active" }} to='bag'><IoBagOutline className='icon_2' />Bag</NavLink>
      </div>
    </div>
  )
}

export default Navbar
