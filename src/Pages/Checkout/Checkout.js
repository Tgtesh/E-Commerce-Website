
import React, { useContext, useState } from "react";
import "./Checkout.css";
import { useHistory } from "react-router";
import CartContext from "../../Context/CartContext";
import {IoMdArrowRoundBack} from 'react-icons/io';

const Checkout = () => {

  const history = useHistory();
  const {cart, setCart}=useContext(CartContext)
 
  const adder = () => {
    let total = 0
    cart.forEach(item => total += item.count)
    return total
  }

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => (total += item.price * item.count));
    return total;
  };

  return (
  <div>
    
    <div className="checkoutInfoContainer">
      <div><IoMdArrowRoundBack onClick ={()=>history.goBack()}className="goBackIcon"/></div>
    <h3>Total items in cart: {parseInt(adder())}</h3>
    <h3>Order total: ${calculateTotal().toFixed(2)}</h3>
    </div>
    <div className="form-container">
      <form className="register-form">
       
        <input
        
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />

        
        <input
     
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />

   
        <input
          id="text"
          className="form-field"
          type="text"
          placeholder="Billing Address"
          name="Billing Address"
        />

<input
          
          className="form-field"
          type="text"
          placeholder="Credit Card Info"
          name="Billing Address"
        />

        
        <button
          className="form-field"
          type="submit"onClick={()=>{setCart([]); alert("Thank you for shopping from us!");history.push("/")}}>Place your Order
          </button>
        </form>
      </div>
      </div>
    );
  };
  
  export default Checkout;
  
