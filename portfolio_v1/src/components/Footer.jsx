import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Joey David</h3>
            <p>AI Engineer & Machine Learning Specialist</p>
          </div>
          
          <div className="footer-links">
            <div className="link-column">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="link-column">
              <h4>Social</h4>
              <div className="social-links">
                <a href="https://github.com/joey-david" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/joey-david" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com/joey_david" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {currentYear} Joey David. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;