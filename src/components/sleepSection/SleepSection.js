import React from "react";
import "./SleepSection.scss";
import sleeper from "../../assets/sleeping.png";
import cozybed from "../../assets/cozyBed.webp";

function SleepSection() {
    return (
        <div className="sleep-container">
            <div className="sleep-section">
                <div className="sleep-text">
                    <h2 className="sleep-text__header">Sleep Health</h2>
                    <p className="sleep-text__body">
                        sleeping is good for you. Blah blah blah... more text, some more filler
                        text, etc, etc
                    </p>
                    <button className="sleep-text__cta">Start Sleeping Better</button>
                </div>
                <img className="sleep-section__img" src={sleeper} alt="night sky" />
            </div>
        </div>
    );
}

export default SleepSection;
