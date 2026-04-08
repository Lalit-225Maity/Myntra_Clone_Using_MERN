import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Men from './pages/Men/Men'
import Layout from './components/Layout/Layout'
import Women from './pages/Women/Women'
import Kids from './pages/Kids/Kids'
const App = () => {
  return (
    <div>
      <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='men' element={<Men/>}/>
      <Route path='women' element={<Women/>}/>
      <Route path='kids' element={<Kids/>}/>
      </Route>
      </Routes>
    </div>
  )
}

export default App
