import React, { useContext } from "react";
import "./cart.css";
import { useOutletContext } from "react-router-dom";

function Cart() {
  const { cartItems, setCartItems } = useOutletContext();

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.item.id !== itemToRemove.id)
    );
  };

  let total = 0;

  cartItems.map((item) => {
    total += item.item.price * item.quantity;
  });

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <div>Your cart is empty</div>}
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.item.image} alt={item.item.title} />
          <div>
            <div>{item.item.title}</div>
            <div>
              {item.item.price}$ x {item.quantity} <br></br>
              <button onClick={() => removeFromCart(item.item)}>Remove</button>
            </div>
            <div>Total: {item.item.price * item.quantity}$</div>
          </div>
        </div>
      ))}
      {total > 0 && <h2>TOTAL: {Math.round(total)}$</h2>}
      {cartItems.length > 0 && (
        <button className="checkoutBtn">Checkout and Pay</button>
      )}
    </div>
  );
}

export default Cart;
