import React from "react";
import "./Dental.scss";
import brushing from "../../assets/brushing.png";

function Dental() {
    return (
        <div className="dental-container">
            <div className="dental-section">
                <div className="dental-text">
                    <h2 className="dental-text__header">Dental Health</h2>
                    <p className="dental-text__body">
                        sleeping is good for you. Blah blah blah... more text, some more filler
                        text, etc, etc
                    </p>
                    <button className="dental-text__cta">Start Sleeping Better</button>
                </div>
                <img className="dental-section__img" src={brushing} alt="girl brushing teeth" />
            </div>
        </div>
    );
}

export default Dental;
