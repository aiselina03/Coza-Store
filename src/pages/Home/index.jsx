import React from "react";
import SliderImage from "../../components/Slider";
import Post from "../../components/Posts";
import Cards from "../../components/Cards/indx";
import ScrollToTop from "../../components/Scroll";

function Home() {
  return (
    <>   
    <div className="homePage">
     <SliderImage/>
      <Post/>
      <Cards/>
      <ScrollToTop/>
    </div>
    </>

  );
}

export default Home;
