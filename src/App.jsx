import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import ChooseClass from './components/ChooseClass';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import 'font-awesome/css/font-awesome.min.css';



const App = () => {
  
  return (
    <div>
    
  
      <Navbar />
      <Hero />
      <WhyChoose />
      
      <ChooseClass />
      <Testimonial />
      <Footer/>
      
    </div>
  );
};

export default App;
