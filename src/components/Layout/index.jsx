import React from "react"
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles.js'

const Layout = () => {
    return (
        <LayoutContainer>
            <Sidebar />
            <main className="content-container">
                <Outlet />
            </main>
        </LayoutContainer>
    )
}

export default Layout