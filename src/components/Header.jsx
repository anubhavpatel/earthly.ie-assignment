import React from 'react'
import '../style/Header.scss'
import { Link } from 'react-router-dom'
import {BiShoppingBag} from "react-icons/bi"
import { useSelector } from 'react-redux'
const Header = () => {
  const{cartItems} =useSelector((state)=>state.cart);
  return (
    <nav>
      <div className="logo">
        <img  style={{width:"45px" , height:"45px"}} src="https://static.wixstatic.com/media/ead566_2c378f27d33a419d8c532250cf2f0d51~mv2.png/v1/fill/w_79,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Earthly%20Logo_edited.png" alt="logo" />
        <div className="logoa">
        <h1>earthly</h1>
        <p>Sustainable products at affordable prices</p>
        </div>
      </div>
       
        <div>
        <Link to={"/home"} >Home</Link>
            <Link to={"/"}>Products</Link>
            <Link to={"/cnt"} className="contact">
            <button class="button">Get In Touch</button>
            </Link>
            <Link to={"/cart"}>
            <BiShoppingBag style={{ fontSize: "1.3rem"}}/>
            <p>{cartItems.length}</p>
            </Link>
        </div>
    </nav>
  )
}

export default Header