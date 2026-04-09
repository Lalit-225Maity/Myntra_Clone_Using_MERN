import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home/Home'
import Men from './pages/Men/Men'
import Layout from './components/Layout/Layout'
import Women from './pages/Women/Women'
import Kids from './pages/Kids/Kids'
import Bag from './pages/Bag/Bag'
import Wishlist from './pages/Wishlist/Wishlist'
import Login from './auth/Login/Login'
import Search from './pages/Search/Search'
import Profile from './pages/Profile/Profile'
const App = () => {
    const [search, setsearch] = useState('');
  return (
    <div>
      <Routes>
        <Route element={<Layout search={search} setsearch={setsearch} />}>
          <Route path='/' element={<Home   />} />
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
          <Route path='wish' element={<Wishlist />} />
          <Route path='profile' element={<Profile />} />
          <Route path='bag' element={<Bag />} />
          <Route path='search' element={<Search search={search}  />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
