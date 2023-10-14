import React from 'react';
//import { Link } from 'react-router-dom'; // If using React Router
import './header.css'
function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h3 className='logo'>ⴰⵎⴰⵍⵓ
        <span className='secondLogo'>Tech</span>
        </h3>
      </div>
      <div className="header-right">
        <nav>
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#articles">Articles</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;