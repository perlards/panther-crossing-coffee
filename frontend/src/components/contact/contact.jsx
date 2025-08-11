// src/components/ContactFooter.jsx
import React from 'react';
import tiktok from '../../assets/tiktok.png';
import facebook from '../../assets/facebook.png';
import insta from '../../assets/insta.png';
import { Link } from 'react-router-dom';
import './contact.css'; // we'll create this CSS file next

export default function Contact() {
return (
<footer className="contact-footer">
{/* Left side navigation */}
<div className="footer-nav">  {/* changed from contact-info */}
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
</div>

{/* Center social icons */}
<div className="footer-social">
    <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">
    <img src={tiktok} alt="TikTok" />
    </a>
    <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <img src={facebook} alt="Facebook" />
    </a>
    <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <img src={insta} alt="Instagram" />
    </a>
</div>

{/* Right side contact info */}
<div className="footer-info">
    <h2 className="contact-header">Contact Us</h2>
    <p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
    <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
</div>

    </footer>
    

);
}