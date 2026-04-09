import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Men from './pages/Men/Men'
import Layout from './components/Layout/Layout'
import Women from './pages/Women/Women'
import Kids from './pages/Kids/Kids'
import Bag from './pages/Bag/Bag'
import Wishlist from './pages/Wishlist/Wishlist'
import Profile from './pages/Profile/Profile'
const App = () => {
  return (
    <div>
      <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='men' element={<Men/>}/>
      <Route path='women' element={<Women/>}/>
      <Route path='kids' element={<Kids/>}/>
      <Route path='wish' element={<Wishlist/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='bag' element={<Bag/>}/>
      </Route>
      </Routes>
    </div>
  )
}

export default App
