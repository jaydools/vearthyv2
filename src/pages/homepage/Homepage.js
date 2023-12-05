import React from "react";
import "./Homepage.scss";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import SleepSection from "../../components/sleepSection/SleepSection";
import Dental from "../../components/dental/Dental";
import Benefits from "../../components/benefits/Benefits";
import HeaderHamburg from "../../components/headerHamburg/HeaderHamburg";

function Homepage() {
    return (
        <main className="main-background">
            <Header />
            <HeaderHamburg />
            <Hero />
            <SleepSection />
            <Dental />
            <Benefits />
        </main>
    );
}

export default Homepage;
