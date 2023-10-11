import { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";
import "./items.css";

function Items() {
  const { data, error } = useFetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );

  return (
    <div className="items-out">
      <h1>API Posts</h1>
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div className="items">
        {data &&
          data.map(({ id, title, image, price }) => (
            <div className="item" key={id}>
              <div className="out-img">
                <img src={image}></img>{" "}
              </div>
              <h4>{title}</h4>

              <div className="bottom-item">
                <p>{price}$</p> <button className="add-button">Add to cart</button>{" "}
                <input type="number" min="0"></input>{" "}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Items;
