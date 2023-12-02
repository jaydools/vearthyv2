import React from "react";
import "./Homepage.scss";
import backdrop from "../../assets/hero.png";
import Hero from "../../components/hero/Hero";

function Homepage() {
    return (
        <main>
            <Hero />
            <img className="hero-backdrop" src={backdrop} alt="green gradient background"></img>
        </main>
    );
}

export default Homepage;
