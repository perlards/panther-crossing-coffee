import React from 'react';
import './home.css';
import backgroundImage from '../../assets/coffee1.jpg';

export default function Home() {
  return (
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
  );
}



