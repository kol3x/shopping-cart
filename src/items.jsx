import useFetch from "react-fetch-hook";
import "./items.css";
import { useOutletContext } from "react-router-dom";

function Items() {
  const { data, error } = useFetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );

  const setCount = useOutletContext();

  function handleAddition(e) {
    e.preventDefault();
    setCount((initial) => initial + Number(e.target.elements[0].value));
  }

  return (
    <div className="items-out">
      <h1>Items to buy</h1>
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div className="items">
        {data &&
          data.map(({ id, title, image, price }) => (
            <div className="item" key={id}>
              <div className="out-img">
                <img src={image}></img>
              </div>
              <h4>{title}</h4>

              <form onSubmit={handleAddition} className="bottom-item">
                <p>{price}$</p>
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
