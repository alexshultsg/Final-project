import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartTotalQuantity } = useSelector(state => state.cart)
    return(
       <nav className="header">
        <Link to = "/home">
        <h2>Online Shopping</h2>
        </Link>
       <ul>
        <li className="cart">
          <Link to = "/cart">
          <ion-icon name="cart-outline"></ion-icon><span>{cartTotalQuantity}</span>
          </Link>
        </li>
       </ul>
        </nav>

        
      
      )
}
export default Navbar;