import React from 'react'

import {AiFillDelete} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import "../style/cart.scss"

const Cart = () => {
  const dispatch = useDispatch();
  const{cartItems,subTotal,shipping,tax,total} =useSelector((state)=>state.cart);
  const increment =(id)=>{
    dispatch({
      type: "addToCart", payload: {id}
    })
    dispatch({
      type: "calculatePrice"
    })
  }
  const decrement =(id)=>{
    dispatch({
      type: "decrement", payload: id
    })
    dispatch({
      type: "calculatePrice"
    })
  }
  const deleteHandler =(id)=>{
    dispatch({
      type: "deleteFromCart", payload: id
    })
    dispatch({
      type: "calculatePrice"
    })
  }
 
  return (
    <div className='cart'>
   <main>
    {
        cartItems.length >0 ?(
          cartItems.map(i=>(
            <CartItem
            imgSrc={i.imgSrc}
            name={i.name}
            price={i.price}
            id={i.id}
            qty={i.quantity}
            key={i.id}
            increment={increment}
             decrement={decrement}
            
            deleteHandler={deleteHandler}
             />
          ))
        ) : <h1> Cart is Empty </h1>
    }
   </main>
   <aside> 
   <h2>Subtotal: ${subTotal}</h2>
        <h2>Shipping: ${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${total}</h2>
        <button   title="We can't accept online orders right now ">Order Now</button>
   </aside>
    </div>
  )
}
const CartItem = ({ imgSrc, name, price, qty,id, decrement,increment, deleteHandler}) => (
  <div className="cartItem">
   
    <img src={imgSrc} alt="Item" />
    
   <div className="asd">
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>

    <div className='plus-minus'>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    
     
    
    <AiFillDelete className='delete' onClick={() => deleteHandler(id)} />
    </div>
    </div>
  </div>
);
export default Cart