import './styles/Hero.css';
import heroImg from '../assets/images/hero.png';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Central Texas Fly Fishing</h1>
          <p>At lacus vitae nulla sagittis scelerisque nisi. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.</p>
          <a href="#" className="btn">Get started</a>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Fly fishing in a lake with mountains" />
        </div>
      </div>
    </section>
  );
}

export default Hero;