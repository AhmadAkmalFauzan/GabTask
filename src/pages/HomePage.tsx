// File: src/pages/HomePage.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />

      <Footer />
    </div>
  );
};

export default HomePage;