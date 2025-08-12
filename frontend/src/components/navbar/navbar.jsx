import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './navbar.css';

function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => setIsOpen(!isOpen);

return (
    <>
    <div id="navbar">
        <div className="hamburger" onClick={toggleMenu}>☰</div>
        <Link to="/" className="navbar-title">
        Panther Crossing Coffee
        </Link>

    </div>

    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={toggleMenu}>✕</div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/hours">Hours</Link>
    </div>

    {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
);
}

export default Navbar;
