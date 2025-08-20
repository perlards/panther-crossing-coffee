// src/components/Contact.jsx
import React from 'react';
import tiktok from '../../assets/tiktok.png';
import facebook from '../../assets/facebook.png';
import insta from '../../assets/insta.png';
import Logo from '../../assets/logoblack.jpg';
import { Link } from 'react-router-dom';
import './contact.css';

export default function Contact() {
return (
    <footer className="contact-footer">
    {/* Logo */}
    <div className="footer-logo">
        <img src={Logo} alt="Panther Crossing Coffee" />
    </div>

    {/* Social links */}
    <div className="footer-social-section">
        <h4>GET CONNECTED</h4>
        <div className="footer-social">
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" />
        </a>
        <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={tiktok} alt="TikTok" />
        </a>
        </div>
    </div>

    {/* Contact info */}
    <div className="footer-info-section">
        <h4>CONTACT US</h4>
        <p><a href="tel:+1234567890">+1 (234) 567-8900</a></p>
        <p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
    </div>


    {/* BACK TO TOP (centered at the bottom) */}
    <a href="#top" className="back-to-top" onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }}>Back to Top ⇧</a>
    </footer>
);
}
