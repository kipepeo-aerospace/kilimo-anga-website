import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Technology from './components/Technology';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import Partner from './components/Partner';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Technology />
      <HowItWorks />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;