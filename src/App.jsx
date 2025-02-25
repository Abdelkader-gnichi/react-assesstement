// src/App.jsx

import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedOptions from './components/FeaturedOptions';
import MemberStories from './components/MemberStories';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className='bg-white'>
      <Header />
      <Hero />
      <FeaturedOptions />
      <MemberStories />
      <Footer />
    </div>
  );
};

export default App;