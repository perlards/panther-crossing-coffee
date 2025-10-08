import React from "react";
import "./hours.css";

export default function Hours() {
return (
    <section className="hours-section">
    <div className="map-container">
        <iframe
        title="Lucky Cat Miami Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.0014232345!2d-80.13407538497398!3d25.77230098363638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b4f1d20b7e1d%3A0x53f692f9f8b12a9a!2s119%20Washington%20Ave%20Suite%20100%2C%20Miami%20Beach%2C%20FL%2033139!5e0!3m2!1sen!2sus!4v1699999999999"
        allowFullScreen=""
        loading="lazy"
        ></iframe>
    </div>

    <div className="info-container">
        <div className="info-block">
        <h4 className="small-title">PANTHER CROSSING COFFEE</h4>
        <h2 className="big-title">PANTHER CROSSING COFFEE HOLLYWOOD</h2>
        <div className="address">
            <span className="icon">📍</span>
            <p>
            food truck, Miami, FL, 33139 
            <br />
            <a href="https://goo.gl/maps/UJ6pF7cY7yE2" target="_blank" rel="noreferrer">
                Get directions
            </a>
            </p>
        </div>
        </div>

        <div className="info-block">
        <h4 className="small-title">OPENING HOURS</h4>
        <p className="hours-text">
            Panther Crossing Coffee is opening soon!
        </p>
        </div>
    </div>
    </section>
);
}
