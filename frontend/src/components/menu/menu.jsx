import React from "react";
import "./menu.css";

function Menu() {
  return (
    <div className="menu-page">
      <div className="menu-header">
        <h2>Our Menu</h2>
        <p>made fresh at home</p>
      </div>

      <div className="menu-section">
        <h3>Coffees</h3>
        <ul>
          <li>
            <span>Black</span>
            <span className="price">$18</span>
          </li>
          <li>
            <span>Latte</span>
            <span className="price">$22</span>
          </li>
          <li>
            <span>Iced Coffee</span>
            <span className="price">$20</span>
          </li>
        </ul>
      </div>

      <div className="menu-section">
        <h3>Teas</h3>
        <ul>
          <li>
            <span>Black Tea</span>
            <span className="price">$36</span>
          </li>
          <li>
            <span>Green Tea</span>
            <span className="price">$65</span>
          </li>
          <li>
            <span>Chamomile</span>
            <span className="price">$28</span>
          </li>
        </ul>
      </div>

      <div className="menu-section">
        <h3>Pastries</h3>
        <ul>
          <li>
            <span>Crossiant</span>
            <span className="price">$14</span>
          </li>
          <li>
            <span>Egg bites</span>
            <span className="price">$16</span>
          </li>
        </ul>
      </div>

      <div className="menu-section">
        <h3>Drinks</h3>
        <ul>
          <li>
            <span>Signature lemonade</span>
            <span className="price">$15</span>
          </li>
          <li>
            <span>Dalgonas</span>
            <span className="price">$22</span>
          </li>
          <li>
            <span>Hot Chocolate</span>
            <span className="price">Ask Server</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
