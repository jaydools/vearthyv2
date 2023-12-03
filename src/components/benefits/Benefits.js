import React from "react";
import "./Benefits.scss";

function Benefits() {
    return (
        <div className="benefits-container">
            <div className="benefits-text">
                <h2 className="benefits-text__header">Benefits</h2>
                <h3 className="benefits-text__subheader">Why is personal care important?</h3>
            </div>
            <div className="benefits-cards">
                <div className="benefits-cards-left">
                    <div className="benefits-cards-left__top"></div>
                    <div className="benefits-cards-left__bottom"></div>
                </div>
                <div className="benefits-cards-right">
                    <div className="benefits-cards-right__left">
                        <div className="benefits-cards-right__one"></div>
                        <div className="benefits-cards-right__two"></div>
                    </div>
                    <div className="benefits-cards-right__right">
                        <div className="benefits-cards-right__three"></div>
                        <div className="benefits-cards-right__four"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;
