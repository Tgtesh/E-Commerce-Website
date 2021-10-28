import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./nav.css";
import CartContext from "../../Context/CartContext";
import Categories from "../Categories/Categories";


const Nav = () => {
  const { cart } = useContext(CartContext);
  const adder = () => {
    let total = 0
    cart.forEach(item => total += item.count)
    return total
  }
  return (
    <nav>
      <Link className="link" to="/">
        <h1 className="title">Store</h1>
      </Link>

     
      <Link className="link checkout" to="/cart">
      

        <AiOutlineShoppingCart className="icon " />
        <p>{parseInt(adder())}</p>
      </Link>
    </nav>
  );
};

export default Nav;
