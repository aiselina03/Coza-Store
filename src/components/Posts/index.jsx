import React from "react";
import "./style.scss";
function Post() {
  return (
    <div className="containerPosts">
      <div className="posts">
        <div className="post">
          <img
            src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp"
            alt=""
          />
          <div className="opacity">
            <div className="text">
              <h1>Women</h1>
              <p>Spring 2018</p>
              <div className="shopNow">
                  <a href="/">SHOP NOW</a>
              </div>
            
            </div>
          </div>
        </div>

        <div className="post">
          <img
            src="https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp"
            alt=""
          />
          <div className="opacity">
            <div className="text">
              <h1>Men</h1>
              <p>Spring 2018</p>
              <div className="shopNow">
                  <a href="/">SHOP NOW</a>
              </div>
            
            </div>
          </div>
        </div>
        <div className="post">
          <img
            src="https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg.webp"
            alt=""
          />
          <div className="opacity">
            <div className="text">
              <h1>Accessories</h1>
              <p>New Trend</p>
              <div className="shopNow">
                  <a href="/">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
