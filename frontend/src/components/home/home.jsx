import React from 'react';
import './home.css';
import backgroundImage from '../../assets/coffee1.jpg';
import { Link } from 'react-router-dom';

import cupIcon from '../../assets/cup-icon.png';
import beansIcon from '../../assets/beans-icon.png';
import roastingIcon from '../../assets/roasting-icon.png';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textShadow: '0 0 5px black',
        }}
      >
        <h1>Welcome to Panther Crossing Coffee</h1>
        <p>Your daily ritual of great coffee</p>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <h1>MADE TO BE A DAILY RITUAL</h1>
        <p>Stay energized and make every day memorable. We're on your team.</p>
        <Link to="/about" className="learn-more">LEARN MORE →</Link>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature">
          <img src={cupIcon} alt="Meticulous Quality" />
          <h3>Meticulous Quality</h3>
        </div>
        <div className="feature">
          <img src={beansIcon} alt="Ethically Sourced" />
          <h3>Ethically Sourced</h3>
        </div>
        <div className="feature">
          <img src={roastingIcon} alt="Small Batch Roasting" />
          <h3>Small Batch Roasting</h3>
        </div>
        <div className="feature">
          <img src={cupIcon} alt="Customized Subscription" /> {/* Temporary duplicate */}
          <h3>Customized Subscription</h3>
        </div>
      </section>
    </>
  );
}
