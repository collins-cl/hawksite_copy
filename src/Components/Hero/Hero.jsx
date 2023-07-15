import React from "react";
import "../../Components/Hero/Hero.scss";
import HeroImage from "../../assets/logos/white-hawksight.png";
import { FaArrowRight } from "react-icons/fa";
import certik from "../../assets/partners/certik.webp";
import sec3 from "../../assets/logos/white-sec3.svg";
import solana from "../../assets/sponsored/solanium.webp";

const Hero = () => {
  return (
    <div className="hero">
      <div className="logo-image">
        <img src={HeroImage} alt="" />
      </div>

      <h2>
        <span>Maximize your gains</span> on Solana DeFi with our{" "}
        <span>self-custodial & yield-optimized </span>strategies
      </h2>

      <div className="explore-cont">
        <div className="explore-1">
          <div>
            <p>Explore 40+ strategies now</p>
            <FaArrowRight className="icon" />
          </div>
        </div>
        <div className="explore-2">
          <div className="e-01">
            <p>AUDITED BY</p>
            <div>
              <img src={certik} alt="" />
              <img src={sec3} width={80} alt="" />
            </div>
          </div>

          <div className="e-02">
            <p>BACKED BY</p>
            <img src={solana} width={80} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
