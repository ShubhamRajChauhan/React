import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'  //router outlet  provide karta hai aur jahan outlet likha hai bs wahi change hoga

function Layout() {
    return (
        <>
            <Header />
            <Outlet />      {/*ye change hoga , header and footer same rahega */}
            <Footer />
        </>
    )
}

export default Layout
