import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import axios from 'axios';
import './Navbar.css'
import Badge from '@mui/material/Badge';
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Navbar = ({ search, setsearch ,count,setcount}) => {
 
   useEffect(() => {
    (async()=>{
      try {
        const response=await axios.get('/api/getbag');
        console.log(response.data.checkUser);
         setcount(response.data.checkUser.length)
      } catch (error) {
        console.log(error);
      }
    })();
 }, [])
  const navigate = useNavigate();
  const [profiledetail, setprofiledetail] = useState(false);
  
  const Searchdata = (e) => {
    const value = e.target.value
    console.log(value);
    setsearch(value)

  }
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      navigate('search')
    }
  }
  const [userlogin, setuserlogin] = useState(null);
  useEffect(() => {
    const users = localStorage.getItem("User");
    if (users) {
      setuserlogin(JSON.parse(users))
    }
  }, [])
  const Logout = () => {
    setTimeout(async () => {
      const response = await axios.post('/api/logout');
      localStorage.removeItem("User");
      setuserlogin(null)
      window.location.reload();
    }, 3000);

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
        <input type="text" placeholder='search your product' value={search} onChange={Searchdata} onKeyDown={handleEnter} />
      </div>
      <div className="navbar-right">
        <div className="profile-wrapper" onMouseEnter={() => { setprofiledetail(true) }} onMouseLeave={() => { setprofiledetail(false) }}>
          <NavLink className={(e) => { return e.isActive ? "active" : "not-active" }} to='profile'><CiUser className='icon_2' />Profile

          </NavLink>
          {profiledetail && (
            <div className="user-login-order">
              {userlogin ? (
                <div className="user-login-profile">
                  <h4>Hello {userlogin.username.toUpperCase()}</h4>
                  <p>{userlogin.email}</p>
                </div>
              ) : <button onClick={(e) => { navigate('/login'); e.stopPropagation() }}>Login</button>}
              <div className="user-order">
                <p>Orders</p>
                <p>Wishlist</p>
                <p>Gift Cards</p>
                <p>Contact Us</p>
                <p>Myntra Insider</p>
                {userlogin && <p onClick={() => { Logout() }}>Log out</p>}
              </div>
            </div>
          )}
        </div>
        <NavLink className={(e) => { return e.isActive ? "active" : "not-active" }} to='wish'><CiHeart className='icon_2' />Wishlist</NavLink>
        <NavLink className={(e) => { return e.isActive ? "active" : "not-active" }} to='bag'>
        
            <Badge badgeContent={count}  variant="standard" color="warning"  className='badge-bag'><IoBagOutline className='icon_2' />Bag</Badge>
         
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
