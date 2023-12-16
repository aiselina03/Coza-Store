import React, { useContext } from "react";
import { NavLink , Link} from "react-router-dom";
import "./style.scss";
import { WishlistContext } from "../../components/context/WishlistContext";
import { BasketContext } from "../../components/context/BasketContext";

function Navbar() {
  const {wishlist} = useContext(WishlistContext)
  const {basket} = useContext(BasketContext)
  return (
    <div className="containerNavbar">
      <div className="navbar">
          <div className="logo">
            <NavLink to="/">
               <img
            src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png.webp"
            alt=""
          /> 
            </NavLink>
        </div>
        <ul className="menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
          <NavLink to={"/basket"}>Features</NavLink>
          </li>
          {/* <li>
            <Link>Blog</Link>
          </li> */}
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>   
         <div className="iconsNav">
            <i class="fa-regular fa-magnifying-glass"></i>
            <sup></sup>
          <NavLink to={"/basket"}>
            <i class="fa-regular fa-cart-shopping"></i> <sup>{basket.length ? basket.length : "0"}</sup>
          </NavLink>
          <NavLink to={"/wishlist"}>
            <i class="fa-regular fa-heart"></i>
             <sup>{ wishlist.length ? wishlist.length : " 0"}</sup>
          </NavLink>
        </div>
        </div>
        </div>
  );
}

export default Navbar;
