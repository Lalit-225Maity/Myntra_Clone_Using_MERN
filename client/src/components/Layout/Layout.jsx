import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
const Layout = ({search,setsearch,count}) => {
    return (
        <div>
            <Navbar search={search} setsearch={setsearch} count={count} />
            <Outlet />
        </div>
    )
}

export default Layout
