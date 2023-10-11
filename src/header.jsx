import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-1">
        <h1>DripShop</h1> 
      </div>

      <div className="header-3">
        <div className="circle">
          <div className="button left">
            <button>🛍️</button>
          </div>
          <div className="button right">
            <button>🛒</button>
          </div>
        </div>
      </div>
      <div className="header-5">
      </div>
    </div>
  );
}

export default Header;
