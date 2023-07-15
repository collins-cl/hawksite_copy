import React from "react";
import Hero from "../Components/Hero/Hero";
import Images from "../Variable/Images";
import "../Pages/Home.scss";

const Home = () => {
  return (
    <div>
      <Hero />

      <div className="images-carousel">
        <p>POWERED BY</p>
        <div className="carousel">

          ddddd
          <div className="card">
           
            {Images &&
              Images.map((image) => (
                <div key={image.id}>
                  <img src={image.image} width={120} alt="" />
                </div>
              ))}
          </div>
        </div>
      </div>

      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
    </div>
  );
};

export default Home;
