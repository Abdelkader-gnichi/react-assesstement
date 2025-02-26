import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './styles/Header.css';
import logoImg from '../assets/images/logo.png';

function Header({ isMobileMenuOpen, setIsMobileMenuOpen, activeSection, setActiveSection }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobileMenuOpen]);

  const handleNavClick = (section) => {
    setActiveSection(section);
    if (!isDesktop) {
      setIsMobileMenuOpen(false);
    }
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About us' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
        <a href="https://abdelkader-gnichi.github.io/react-assesstement/">
          <img src={logoImg} alt="Central Texas Fly Fishing Logo" className="logo" />
        </a>
          <h1 className="logo-text">Central Texas Fly Fishing</h1>
        </div>

        {isDesktop ? (
          <nav className="desktop-nav">
            <ul>
              {navItems.map(item => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <button 
            className="menu-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        )}

        {!isDesktop && isMobileMenuOpen && (
          <nav className="mobile-nav">
            <ul>
              {navItems.map(item => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

// Define PropTypes for the Header component
Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
  setIsMobileMenuOpen: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
};

export default Header;