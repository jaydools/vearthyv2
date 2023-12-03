import React from "react";
import "./Homepage.scss";
import backdrop from "../../assets/hero.png";
import Hero from "../../components/hero/Hero";
import SleepSection from "../../components/sleepSection/SleepSection";
import Dental from "../../components/dental/Dental";
import Benefits from "../../components/benefits/Benefits";

function Homepage() {
    return (
        <main>
            <Hero />
            <SleepSection />
            <Dental />
            <Benefits />
            <img className="hero-backdrop" src={backdrop} alt="green gradient background"></img>
        </main>
    );
}

export default Homepage;
