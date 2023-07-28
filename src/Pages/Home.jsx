import React from "react";
import Hero from "../Components/Hero/Hero";
import Images from "../Variable/Images";
import "../Pages/Home.scss";
import TrustedBy from "../Components/TrustedBy/TrustedBy";
import Roadmap from "../Components/Roadmap/Roadmap";
import Footer from "../Components/Footer/Footer";

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

      <Footer />
    </div>
  );
};

export default Home;
