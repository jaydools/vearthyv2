import React from "react";
import "./Hero.scss";
import toothbrush from "../../assets/toothbrush.jpg";
import bedding from "../../assets/bedding.jpg";

function Hero() {
    return (
        <div className="main-container">
            <div className="hero-text">
                <h1 className="hero-text__header">Sustainable Essentials</h1>
                <h2 className="hero-text__subtext">Because your home is important </h2>
            </div>
            <div className="hero-cards">
                <div className="hero-cards__one">
                    <div className="hero-cards__img-one" alt="bamboo sonic electric toothbrush" />
                </div>
                <div className="hero-cards__two">
                    <div className="hero-cards__img-two" alt="night sky" />
                </div>
                <div className="hero-cards__three">
                    <div className="hero-cards__img-three" alt="bamboo lyocell bedding" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
