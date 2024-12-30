import React from 'react';
import {Link} from "react-router-dom";

import { useCart } from '../context/CartContext';


const Navbar = () => {
  const {cartItems }= useCart()



  return (
  <>

<div className="navSection">
      <div className="title">
        <h2> K-Mart</h2>
      </div>
      <div className=" search">
        <input type="text" placeholder="search...." />
      </div>
      <div className="user">
        <div className="user-detail">
            SignIN/SignUp
        </div>
        <Link to='/cart'> 
        <div className="cart">
            Cart
            <span>
              {cartItems.length}
            </span>
        </div>
        </Link>
      </div>
    </div>
    <div className="subMenu">
      <ul>

  <Link to='/Biscuits'>

   <li>Biscuits</li>
  </Link>      
      <Link to= '/Chains'>
        <li>Chains </li>
      </Link>
      <Link to= '/Chocolates'>

        <li>Chocolates</li>
      </Link>
      <Link to= '/Drinks'>
        <li>Drinks </li>
      </Link>
      <Link to= '/Jhumkas'>
        <li>Jhumkas </li>
      </Link>
      <Link to= '/Kurkure'>
        <li>Kurkure</li>
      </Link>
      <Link to= '/Lays'>

        <li>Lays</li>
      </Link>
      <Link to= '/Nailpolish'>
        <li>Nailpolish</li>
        </Link>
      
        <Link to='/Shampoos'>

        <li>Shampoos</li>
        </Link>
        <Link to= '/Soaps'>

        <li>Soaps </li>
        </Link>
        <Link to= '/Stationery'>

        <li>Stationery</li>
        </Link>
        <Link to='/Toys'>
        <li>Toys</li>
        
        </Link>
        <Link to= '/Watches'>
        
        <li>Watches</li>
        </Link>
      </ul>
    </div>
  </>
        

         
  
  )
}

export default Navbar
