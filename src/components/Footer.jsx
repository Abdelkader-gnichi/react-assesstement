import './styles/Footer.css';
import { LogoImg, FacebookIcon, InstagramIcon, LinkedInIcon } from './SvgIcons';
// import logoImg from '../assets/images/logo.png';


function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-logo">
          <LogoImg />
          </div>
          
          <div className="footer-links">
            <a href="#">FAQ</a>
            <a href="#">Privacy</a>
            <a href="#">Support</a>
            <a href="#">Contact</a>
          </div>
        </div>
        
        <div className="social-links">
          <a href="#" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="#" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="#" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      
      <div className="copyright">
        <div className="container">
          <p>© 2024 Central Texas Fly Fishing All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;