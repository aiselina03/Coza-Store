import React, { useState, useEffect, useContext } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";
import { BasketContext } from "../context/BasketContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  

function Cards() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filterData, setFilterData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);
  const { addBasket , checkIsBasket} = useContext(BasketContext);

  useEffect(() => {
    fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

function notify() {
  toast.success('Added Basket!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}

  function handleInput(e) {
    setInputValue(e.target.value);
  }
  function handleFilter(category) {
    setFilterData(category);
  }
  return (
    <>
      <div className="cardsContainer">
        <h1>PRODUCT OVERVIEW</h1>
        <div className="row">
          <ul>
            <li onClick={() => handleFilter("")}>All Products</li>
            <li onClick={() => handleFilter("Womens")}>Womens</li>
            <li onClick={() => handleFilter("Mens")}>Mens</li>
            <li onClick={() => handleFilter("Kids")}>Kids</li>
          </ul>
          <div className="search">
            <i className="fa-regular fa-magnifying-glass"></i>
            <input
              type="text"
              value={inputValue}
              onChange={handleInput}
              placeholder="Search for products..."
            />
          </div>
        </div>
        {isLoading ? (
          <div className="spin">
            <i class="fa-solid fa-spinner fa-spin"></i>
          </div>
        ) : (
          <div className="cards">
            {products
              .filter((x) =>x.name.toLowerCase().includes(inputValue.toLowerCase())) //search
              .filter((x) => x.category.includes(filterData)) //filter
              .map((x) => (
                <div className="card">
                  <div className="img">
                    <img src={x.images} alt="" />
                    <div className="icons">
                      <div className="eye">
                        <Link to={"/home/" + x.id}>
                          <i class="fa-regular fa-eye fa-fw"></i>
                        </Link>
                      </div>
                      <div className="heart">
                        <i
                          class={`${checkIsWishlist(x) ?  "fa-solid fa-heart" : "fa-regular fa-heart"}`}
                          onClick={() => addRemoveWishlist(x)}
                        ></i>
                      </div>
                      <div className="basket">
                        <i
                          class={`${checkIsBasket(x) ? "fa-solid fa-cart-shopping" : "fa-regular fa-cart-shopping"}`}
                          onClick={() =>{notify();addBasket(x)} }
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="text">
                    <h4>{x.name}</h4>
                    <p>${x.price}</p>
                  </div>
                </div>
              ))}
              <ToastContainer/>
          </div>
        )}
      </div>
    </>
  );
}

export default Cards;
