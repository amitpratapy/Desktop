import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const {cart} = useSelector((state) => state.myCart);
  return (
    <>
    <div className="s-pos">
    <div className="position">
    <div className=" height text-white">
     <Link to="/">  <div className='left card-cursor'>Ecommerce</div></Link> 
     <Link to="/list"> <div className='right card-cursor'><i className="fa-solid fa-cart-shopping"></i></div></Link> 
    </div>
    <div className="absolute">{cart.length}</div>
    </div>
    </div>
    </>
  )
}

export default Navbar