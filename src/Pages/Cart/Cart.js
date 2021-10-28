import { useContext } from "react";
import React from "react";
import CartContext from "../../Context/CartContext";
import "./Cart.css";
import { useHistory } from "react-router";
import {MdDeleteOutline} from "react-icons/md"

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const history = useHistory();

  const modifyCount = (e, index) => {
    const cartCopy = [...cart];
    cartCopy[index].count = e.target.value;
    setCart(cartCopy);
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => (total += item.price * item.count));
    return total;
  };
  const deleteItem = (index) => {
    const coppyOfCart = [...cart];
    coppyOfCart.splice(index, 1);
    setCart(coppyOfCart);
  };
  return (
    <div className="cart_container">
      {cart.length === 0 ? (<div className="cartEmpty">
        <h1 className="cartEmpty">No item in the cart</h1>
        <button className="checkoutButton"  onClick={()=>history.push("/")}>Continue Shopping</button></div>
      ) : (
        <div className="product_cart_container">
          {cart.map((item, index) => (
            <div className="cart_item">
              <p className="PTitle">
                {" "}
                {index + 1}.) {item.title}
              </p>
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                  width: "100px",
                  height: "100px",
                  backgroundSize: "cover",
                  position: "center",
                }}
              ></div>

              <div className="cart_edit_group">
                <h4>
                  ${item.price} x
                  <input
                    className="count_edit"
                    onChange={(e) => {
                      modifyCount(e, index);

                    }}
                    value={item.count}
                  ></input>{" "}
                  = ${item.price * item.count} 
                </h4><span className="deleteIcon-container">
                <MdDeleteOutline onClick={deleteItem} className="deleteIcon"/></span>
              </div>
            </div>
          ))}{" "}
          <div className="subtotalContainer">
            <h1>Total : ${calculateTotal().toFixed(2)}</h1>
            <button
              className="checkoutButton"
              onClick={() => {
                
                history.push("/checkout");
              }}
            >
              <h1> Proceed to Checkout</h1>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
