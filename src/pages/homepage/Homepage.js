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
            </div>
            <img className="hero-backdrop" src={backdrop} alt="night sky"></img>
        </main>
    );
}

export default Homepage;
