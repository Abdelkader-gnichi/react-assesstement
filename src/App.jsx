import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedOptions from './components/FeaturedOptions';
import MemberStories from './components/MemberStories';
import Footer from './components/Footer';
import './App.css';


function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');


  return (
    <div className="app">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <FeaturedOptions />
        </section>
        <section id="services">
          <MemberStories />
        </section>
      </main>
      <Footer />
      
    </div>
  );
}

export default App;