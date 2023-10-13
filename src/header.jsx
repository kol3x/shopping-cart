import { useState } from "react";
import "./header.css";
import { Link, Outlet } from "react-router-dom";

function Header() {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    if (isCartOpen) {
      setIsCartOpen(false);
    } else {
      setIsCartOpen(true);
    }
  };

  const linkElement = isCartOpen ? (
    <Link to="/">🛒</Link>
  ) : (
    <Link to="/cart">🛒</Link>
  );

  return (
    <>
      <div className="header">
        <div className="header-1">
          <h1>DripShop</h1>
        </div>
        <div className="header-3">
          <div className="circle">
            <div className="button left">
              <button onClick={handleCartClick}>{linkElement}</button>
            </div>
            <div className="button right">
              <button>
                <Link to="/">🛍️</Link>
              </button>
            </div>
            <h2>Items added: {count}</h2>
          </div>
        </div>
        <div className="header-5"></div>
      </div>
      <Outlet context={{ setCount, setCartItems, cartItems }} />
    </>
  );
}

export default Header;
