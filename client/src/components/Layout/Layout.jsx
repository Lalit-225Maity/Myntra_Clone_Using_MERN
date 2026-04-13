import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
const Layout = ({search,setsearch}) => {
    return (
        <div>
            <Navbar search={search} setsearch={setsearch}  />
            <Outlet />
        </div>
    )
}

export default Layout
