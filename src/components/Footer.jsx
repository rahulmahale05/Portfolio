import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaQrcode  } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { FiArrowUp } from 'react-icons/fi';
import qrCode from '../assets/qr.jpeg'; // Import the QR code image
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleQrClick = () => {
    window.open("https://drive.google.com/drive/folders/1ym7jZfXsPdwF3M55TVdXD85YDFn8pVLF?usp=sharing", "_blank");
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Rahul Mahale</h3>
            <p className="footer-about">
              MERN stack developer crafting dynamic and scalable web applications with clean, efficient code.
            </p>
            <div className="footer-socials">
              <a href="https://github.com/rahulmahale05" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/rahul-mahale-70266b258/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://leetcode.com/u/rahul1845/" target="_blank" rel="noopener noreferrer" aria-label="Leetcode">
                <SiLeetcode className="social-icon" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Project</a></li>
              <li><a href="#certifications">Certificates</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-contact">
              <li>
                <FaEnvelope className="contact-icon" />
                <span>rahulmahale1845@gmail.com</span>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <span>+91 8767943966</span>
              </li>
            </ul>
          </div>

          {/* Certificate Validation */}
          <div className="footer-section">
            <h3 className="footer-heading">Validate Certificates</h3>
            <div className="qr-container" onClick={handleQrClick}>
              <img 
                src={qrCode} 
                alt="Certificate Validation QR Code" 
                className="qr-code"
              />
              <div className="qr-hint">
                <FaQrcode className="qr-icon" />
                <span>Scan or click to verify</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Rahul Mahale. All rights reserved.
          </div>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <FiArrowUp className="arrow-icon" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
