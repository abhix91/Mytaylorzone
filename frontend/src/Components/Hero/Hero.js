import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero ml-6 mr-6">
      <div className="container">
        <div className="content">
          <div className="text">
            <h1>
              LET’S <span className="highlight">EXPLORE</span> UNIQUE CLOTHES.
            </h1>
            <p>Live for Influential and Innovative fashion!</p>
            <button>
              <span>SHOP NOW</span>
              <IoIosArrowRoundForward className="arrow" />
            </button>
          </div>
          {/* Replace the background with an img tag */}
          <div className="image-container">
            <img
              src="images/hero.png"
              alt="Hero"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
