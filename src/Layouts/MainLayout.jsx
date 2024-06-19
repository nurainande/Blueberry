import { Outlet } from "react-router-dom"
import Navbar from "../components/Header/Navbar"
import Footer from "../components/Footer/Footer"
import Cartside from "../components/Cartside"
import { useState } from "react"

function MainLayout() {
  const [showCart, setShowCart] = useState(false)
  return (
    <main>
        <Navbar setShowCart={setShowCart} />
        {/* {2>1 && <Cartside/>} */}
        {showCart && <Cartside setShowCart={setShowCart}/>}
        <Outlet />
        <Footer/>
    </main>
  )
}

export default MainLayout