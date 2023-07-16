import React from "react";
import Hero from "../Components/Hero/Hero";
import Images from "../Variable/Images";
import "../Pages/Home.scss";
import TrustedBy from "../Components/TrustedBy/TrustedBy";
import Roadmap from "../Components/Roadmap/Roadmap";

const Home = () => {
  return (
    <div>
      <Hero />

      <div className="images-carousel">
        <p>POWERED BY</p>
        <div className="carousel">
          <div className="card">
            {Images &&
              Images.map((image) => (
                <div key={image.id}>
                  <img
                    src={image.image}
                    title={image.title}
                    width={120}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      <TrustedBy />

      <Roadmap />
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
