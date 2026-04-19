import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
const Layout = ({search,setsearch,count,setcount}) => {
    return (
        <div>
            <Navbar search={search} setsearch={setsearch} count={count} setcount={setcount} />
            <Outlet />
        </div>
    )
}

export default Layout
