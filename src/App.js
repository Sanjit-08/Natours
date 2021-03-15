import React from 'react';
import './icon-font.css';
import './App.css';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import GridTest from './components/GridTest';
import Header from './components/Header';
import ToursSection from './components/ToursSection';
import StoriesSection from './components/StoriesSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Popup from './components/Popup';

const App=() => {

  return (
    <div className="App">
      <Navigation />
      <Header />
      {/* <GridTest /> */}
      <AboutSection />
      <FeaturesSection />
      <ToursSection />
      <StoriesSection/>
      <BookingSection />
      <Footer />
      <Popup />
    </div>
  );
}

export default App;
