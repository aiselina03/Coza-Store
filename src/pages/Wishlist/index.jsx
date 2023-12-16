import React, { useContext } from "react";
import { WishlistContext } from "../../components/context/WishlistContext";
import "./style.scss";
import { BasketContext } from "../../components/context/BasketContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import ScrollToTop from "../../components/Scroll";

function Wishlist() {
  const { wishlist, addRemoveWishlist } = useContext(WishlistContext);
  const {addBasket} = useContext(BasketContext)

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
      {wishlist.length ? (
        <div className="wishlistCards">
          {wishlist.map((x) => (
            <div className="card">
              <div className="img">
                <img src={x.images} alt="" />
              </div>
              <i class="fa-solid fa-heart"  onClick={() => addRemoveWishlist(x)} ></i>
              <div className="text">
                <h4>{x.name.slice(0,39)}</h4>
                <p>${x.price}</p>
              </div>
              <button className="addBtn" onClick={()=>{notify() ;addBasket(x)}}>add basket</button>
            </div>
          ))}
          <ToastContainer/>
       
        </div>
      ) : (
        <div className="fade">
          <i class="fa-regular fa-heart fa-beat-fade"></i>
        </div>
      )}   
      <ScrollToTop/>
    </>
  );
}

export default Wishlist;
