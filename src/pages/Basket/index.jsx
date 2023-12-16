import React, { useContext } from "react";
import { BasketContext } from "../../components/context/BasketContext";
import "./style.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import ScrollToTop from "../../components/Scroll";

function Basket() {
  const { basket, increaseCount, decreaseCount, removeItem } = useContext(BasketContext);

  function notify() {
    toast.success('Removed Basket!', {
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
    {basket.length ? (
    <div className="container">
        <table>
          <th>PRODUCT</th>
          <th>PRICE</th>
          <th>QUANTITY</th>
          <th>TOTAL</th>
          <th>DELETE</th>

          {basket.map((x) => (
            <tr>
              <td className="product">
                <img src={x.images} alt="" />
                <p>{x.name.slice(0, 22)}</p>
              </td>
              <td><h4>${x.price}</h4></td>
              <td>
                <i class="fa-solid fa-chevron-up" onClick={() => increaseCount(x)}></i>
                <div className="count">{x.count}</div>
                <i class="fa-solid fa-chevron-down" onClick={() => decreaseCount(x)}></i>
              </td>
              <td><h4>${x.price * x.count}</h4></td>
              <td>
                <i class="fa-regular  fa-trash"  onClick={() =>{notify() ; removeItem(x)}}></i>
              </td>
            </tr>
          ))}
          <ToastContainer/>
          
        </table>
      </div>
      ) : ( 
      <div className="bounce">
          <i class="fa-regular fa-cart-shopping fa-bounce"></i>
        </div>
      )}
      <ScrollToTop/>
    </>
  )
}

export default Basket;
