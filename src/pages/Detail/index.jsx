import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.scss"
import { BasketContext } from "../../components/context/BasketContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import ScrollToTop from "../../components/Scroll";


function Detail() {
const [products, setProducts] = useState([])
const [isLoading, setIsLoading] = useState(true)
const {addBasket} = useContext(BasketContext)
let {id}=useParams()

useEffect(() => {
  fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products/"+id)
  .then((res)=>res.json())
  .then((data)=>{
    setIsLoading(false)
    setProducts(data)})
}, [id])

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

  return (
    <>
      <div className="detailPage">
        {isLoading ? (
          <div className="spin">
            <i class="fa-solid fa-spinner fa-spin"></i>
          </div>
        ) : (
          <div className="cardDetail">
            <div className="img">
              <img src={products.images} alt="" />
            </div>
            <div className="info">
              <h3>{products.name}</h3>
              <p><span>Category:</span> {products.category}</p>
              <p><span>Price:</span> ${products.price}</p>
              <p><span>Model:</span> {products.model}</p>
              <p><span>Color:</span> {products.information?.color}</p>
              <p><span>Size:</span> {products.information?.size}</p>
              <p>{products.description?.text}</p>
              <button className="addBtn" onClick={()=>{notify() ; addBasket(products)}}>add basket</button>
            </div>
          </div>
        )}
        <ToastContainer/>
        <ScrollToTop/>
      </div>
    </>
  );
}

export default Detail;
