import useFetch from "react-fetch-hook";
import "./items.css";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function Items() {
  const { data, error } = useFetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );


  const {setCount, setCartItems} = useOutletContext();


  function handleAddition(e, item) {
    e.preventDefault();
    const quantity = Number(e.target.elements[0].value);
    setCount((initial) => initial + quantity);
    setCartItems(prevCart => [...prevCart, {item, quantity}]);
    e.target.elements[0].value = "";
  }

  return (
    <div className="items-out">
      <h1>Items to buy</h1>
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div className="items">
        {data &&
          data.map((item) => (
            <div className="item" key={item.id}>
              <div className="out-img">
                <img src={item.image}></img>
              </div>
              <h4>{item.title}</h4>

              <form onSubmit={(event) => handleAddition(event, item)} className="bottom-item">
                <p>{item.price}$</p>
                <input type="number" min="0"></input>
                <button type="submit" className="add-button">
                  Add to cart
                </button>
              </form>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Items;
