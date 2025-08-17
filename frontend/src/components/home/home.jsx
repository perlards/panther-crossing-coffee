import React from 'react';
import './home.css';
import backgroundImage4 from '../../assets/home.jpg';
import backgroundImage1 from '../../assets/coffee1.jpg';
import backgroundImage from '../../assets/coffee5.jpg';
import backgroundImage2 from '../../assets/coffee4.jpg';
import backgroundImage3 from '../../assets/coffee3.jpg';

import cupIcon from '../../assets/cup-icon.png';
import beansIcon from '../../assets/beans-icon.png';
import roastingIcon from '../../assets/roasting-icon.png';

import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
const settings = {
    dots: true,
    infinite: true,       // Keep infinite on desktop for smooth looping
    speed: 500,
    slidesToShow: 3,      // Show 3 slides on desktop
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
    {
        breakpoint: 768,  // On mobile
        settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: false,      // Disable infinite loop on mobile
        centerMode: true,     // Enable center mode to peek next slide
        centerPadding: '20px',// Reduced peek space to fix left padding issue
        },
    },
    ],
};

return (
    <>
    {/* Hero Section */}
    <section
        className="hero-section"
        style={{
        backgroundImage: `url(${backgroundImage4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textShadow: '0 0 5px black',
        }}
    >
        <h1>Welcome to Panther Crossing Coffee</h1>
        <p>A TASTE OF GREAT COFFEE</p>
        <div className="cloud-overlay" />
    </section>

    {/* About Preview Section */}
    <section className="about-preview">
        <h1>We strive to create for our local community with mobile service of convenience for a fresh, flavored, brewed coffee at a time!</h1>
        <p>Serving our local community with convenience, customer service relationship and providing a commitment to the coffee industry...</p>
        <Link to="/about" className="learn-more">LEARN MORE →</Link>
    </section>
     {/* Image Carousel at the bottom */}
    <section className="bottom-carousel">
        {/* Wrapper div restricts carousel width to max 1200px and centers it */}
        <div>
        <Slider {...settings}>
            <div>
            <img src={backgroundImage} alt="Minority Owned" />
            </div>
            <div>
            <img src={backgroundImage2} alt="Small Local Business" />
            </div>
            <div>
            <img src={backgroundImage3} alt="Gluten Free" />
            </div>
            <div>
            <img src={backgroundImage2} alt="Coffee fourth" /> {/* extra slide */}
            </div>
        </Slider>
        </div>
    </section>

    {/* Features Section */}
    <section className="features-section">
        <div className="feature">
        <img src={cupIcon} alt="Minority Owned" />
        <h3>MINORITY OWNED</h3>
        </div>
        <div className="feature">
        <img src={beansIcon} alt="Small Local Business" />
        <h3>SMALL LOCAL BUSINESS</h3>
        </div>
        <div className="feature">
        <img src={roastingIcon} alt="Ethically Sourced" />
        <h3>ETHICALLY SOURCED</h3>
        </div>
        <div className="feature">
        <img src={cupIcon} alt="Customized Subscription" />
        <h3>FRESHLY MADE</h3>
        </div>
    </section>
    </>
);
}
