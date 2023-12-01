import React from "react";
import "./Homepage.scss";
import backdrop from "../../assets/hero.png";

function Homepage() {
    return (
        <main>
            <div className="main-container">
                <div className="hero-text">
                    <h1 className="hero-text__header">Seo Title Here</h1>
                    <h2 className="hero-text__subtext">More seo junk that describes the company</h2>
                </div>
                <div className="hero-cards">
                    <div className="hero-cards__one">
                        <img className="hero-cards__img-one" /* src={}  */ alt="night sky"></img>
                    </div>
                    <div className="hero-cards__two">
                        <img className="hero-cards__img-two" /* src={}  */ alt="night sky"></img>
                    </div>
                    <div className="hero-cards__three">
                        <img className="hero-cards__img-three" /* src={} */ alt="night sky"></img>
                    </div>
                    <div className="hero-cards__four">
                        <img className="hero-cards__img-four" /* src={} */ alt="night sky"></img>
                    </div>
                </div>
            </div>
            <img className="hero-backdrop" src={backdrop} alt="green gradient background"></img>
        </main>
    );
}

export default Homepage;
