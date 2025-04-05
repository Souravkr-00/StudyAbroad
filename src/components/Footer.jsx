import React from 'react';
import './Footer.css';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <h2 className="footer-logo">StudyAbroad connect</h2>
          <p className="footer-tagline">Creating amazing experiences since 2025</p>
          <div className="social-icons">
            <a href="https://twitter.com" aria-label="Twitter"><i className="fa fa-twitter"><FaTwitter/></i></a>
            <a href="https://facebook.com" aria-label="Facebook"><i className="fa fa-facebook"><FaFacebook/></i></a>
            <a href="https://instagram.com" aria-label="Instagram"><i className="fa fa-instagram"><FaInstagram/></i></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><i className="fa fa-linkedin"><FaLinkedin/></i></a>
          </div>
        </div>
        
        <div className="footer-section links-section">
          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Services</h3>
            <ul>
              <li><a href="/services/web-development">Web Development</a></li>
              <li><a href="/services/app-development">App Development</a></li>
              <li><a href="/services/ui-design">UI/UX Design</a></li>
              <li><a href="/services/consulting">Consulting</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Resources</h3>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;