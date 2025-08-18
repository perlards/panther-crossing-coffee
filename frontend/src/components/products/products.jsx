import React from "react";
import "./Products.css";

export default function Products() {
return (
    <div className="products-page">
    <nav className="products-nav">
        <span>MERCHANDISE</span>
        <span>BLENDS</span>
    </nav>

    {/* Merchandise Section */}
    <section className="category">
        <h2 className="category-title">MERCHANDISE</h2>
        <div className="product-grid">
        <div className="product-card">
            <h3>DIGITAL GIFT CARD</h3>
            <span className="price">5</span>
            <img
            src="/images/giftcard.png"
            alt="Digital Gift Card"
            className="product-image"
            />
        </div>
        </div>
    </section>

    {/* Blends Section */}
    <section className="category">
        <h2 className="category-title">BLENDS</h2>
        <div className="product-grid">
        <div className="product-card">
            <h3>DARK ROAST</h3>
            <span className="price">15</span>
            <img
            src="/images/speed-dial.png"
            alt="Speed Dial"
            className="product-image"
            />
        </div>
        <div className="product-card">
            <h3>VANILLA</h3>
            <span className="price">15</span>
            <img
            src="/images/power-trip.png"
            alt="Power Trip"
            className="product-image"
            />
        </div>
        </div>
    </section>
    </div>
);
}
