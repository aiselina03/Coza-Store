import React from "react";
import "./style.scss"
function Footer() {
  return (
    <div className="footer">
    <div className="containerFooter">
      <div className="categories">
        <h3>CATEGORIES</h3>
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Shoes</li>
          <li>Watches</li>
        </ul>
      </div>
      <div className="help">
        <h3>HELP</h3>
        <ul>
          <li>Track Order</li>
          <li>Returns</li>
          <li>Shipping</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className="about">
        <h3>GET IN TOUCH</h3>
        <p>
          Any questions? Let us know in store at 8th <br /> floor, 379 Hudson St, New
          York, NY 10018 or <br /> call us on (+1) 96 716 6879
        </p>
        <div className="icons">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-pinterest-p"></i>
        </div>
      </div>
      <div className="letter">
        <h3>NEWSLETTER</h3>
        <form action="">
              <input type="text" placeholder="email@example.com"/>
        </form>
        <button>SUBSCRIBE</button>
      </div>
    </div>
    </div>
   
  );
}

export default Footer;
