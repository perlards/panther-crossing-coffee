import React from 'react';
import './about.css';
import coffeeBg from '../../assets/coffee2.jpg';
import logoImage from '../../assets/logoblack.jpg'; // your logo here

export default function About() {
return (
    <section 
    className="about-section" 
    style={{ backgroundImage: `url(${coffeeBg})` }}
    >
    <div className="about-overlay">
        <div className="about-container">
        
        {/* Logo & Title */}
        <div className="about-header">
            <h1 className="about-title">About Us</h1>
        </div>

        {/* Mission */}
        <div className="about-card">
            <h2>Mission Statement</h2>
            <p>
            We strive to create for our local community with mobile service of
            convenience for a fresh, flavored, brewed coffee at a time!
            </p>
        </div>

        {/* Vision */}
        <div className="about-card">
            <h2>Vision</h2>
            <p>
            Serving our local community with convenience, customer service
            relationship, and providing a commitment to the coffee industry for
            growth and aspiration to have a roasting business of different blends
            of coffee beans on site!
            </p>
        </div>

        {/* Values */}
        <div className="about-card">
            <h2>Values</h2>
            <p>
            We care in communication, leadership, and integrity to support our
            local community for positive growth and a long-term relationship in
            serving and supporting people we meet along our journey — near or far
            — remaining loyal all the time.
            </p>
        </div>

        </div>
    </div>
    </section>
);
}
