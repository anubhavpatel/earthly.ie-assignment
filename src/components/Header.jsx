import React from 'react'
import '../style/Header.scss'
import { Link } from 'react-router-dom'
import {BiShoppingBag} from "react-icons/bi"
import { useSelector } from 'react-redux'
const Header = () => {
  const{cartItems} =useSelector((state)=>state.cart);
  return (
    <nav>
        <h2>Logo</h2>
        <div>
            <Link to={"/"}>Products</Link>
            <Link to={"/cart"}>
            <BiShoppingBag/>
            <p>{cartItems.length}</p>
            </Link>
        </div>
    </nav>
  )
}

export default Header