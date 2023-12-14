import React from "react";
import "./Benefits.scss";
import energy from "../../assets/icons/energy.png";
import savings from "../../assets/icons/LTSavings.png";
import mentalHealth from "../../assets/icons/MentalHealth.png";
import physicalHealth from "../../assets/icons/physHealth.png";

function Benefits() {
    return (
        <div className="benefits-container">
            <div className="benefits-text">
                <h2 className="benefits-text__header">Benefits</h2>
                <h3 className="benefits-text__subheader">Why is personal care important?</h3>
            </div>
            <div className="benefits-cards">
                <div className="benefits-cards-left">
                    <div className="benefits-cards-left__top">
                        <p className="benefits-cards-left__points">⚡️</p>
                        <h2 className="benefits-cards-left__points">Increase Energy Levels</h2>
                        <p className="benefits-cards-left__points">💰</p>
                        <h2 className="benefits-cards-left__points">Save Money in the Long Run</h2>
                        <p className="benefits-cards-left__points">😌</p>
                        <h2 className="benefits-cards-left__points">Elevate Mental Well-being</h2>
                        <p className="benefits-cards-left__points"> 💪</p>
                        <h2 className="benefits-cards-left__points">Boost Physical Health</h2>
                    </div>
                </div>
                <div className="benefits-cards-right">
                    <div className="benefits-cards-right__left">
                        <div className="benefits-cards-right__one">
                            <img
                                className="benefits-cards-right__img"
                                src={energy}
                                alt="energy symbol"
                            />
                        </div>
                        <div className="benefits-cards-right__two">
                            <img
                                className="benefits-cards-right__img"
                                src={savings}
                                alt="long term savings icon"
                            />
                        </div>
                    </div>
                    <div className="benefits-cards-right__right">
                        <div className="benefits-cards-right__three">
                            <img
                                className="benefits-cards-right__img"
                                src={mentalHealth}
                                alt="mental health icon"
                            />
                        </div>
                        <div className="benefits-cards-right__four">
                            <img
                                className="benefits-cards-right__img"
                                src={physicalHealth}
                                alt="physical health icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;
