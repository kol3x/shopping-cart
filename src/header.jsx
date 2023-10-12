import { useState } from "react";
import "./header.css";
import { Link, Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <div className="header-1">
          <h1>DripShop</h1>
        </div>
        <div className="header-3">
          <div className="circle">
            <div className="button left">
              <button>
                <Link to="/">🛍️</Link>
              </button>
            </div>
            <div className="button right">
              <button>
                <Link to="cart">🛒</Link>
              </button>
              
            </div>
            <h2>{count}</h2>
          </div>
        </div>
        <div className="header-5"></div>
      </div>
      <Outlet context={setCount} />
    </>
  );
}

export default Header;
