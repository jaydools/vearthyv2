import React from "react";
import "./Hero.scss";

function Hero() {
    return (
        <div className="main-container">
            <div className="hero-text">
                <h1 className="hero-text__header">Sustainable Essentials</h1>
                <h2 className="hero-text__subtext">Because your home is important </h2>
            </div>
            <div className="hero-cards">
                <div className="hero-cards__one">
                    <img className="hero-cards__img-one" /* src={hero} */ alt="night sky" />
                    <p>Night Time</p>
                </div>
                <div className="hero-cards__two">
                    <img className="hero-cards__img-two" /* src={}  */ alt="night sky" />
                    <p>Earth Focused</p>
                </div>
                <div className="hero-cards__three">
                    <img className="hero-cards__img-three" /* src={} */ alt="night sky" />
                    <p>Day Time</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
