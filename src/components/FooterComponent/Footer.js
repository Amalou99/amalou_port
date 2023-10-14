import React from 'react';
import './footer.css'; // Import your Footer CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#articles">Articles</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; 2023 Maymoun EL-FAHIM</p>
        </div>
        <div className="social-media">
          <h3>Connect with Me</h3>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;