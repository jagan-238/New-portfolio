import React from 'react';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import MainPage from './components/MainPage';
import Projects from './components/Projects';
import About from './components/About';
import GitHub from './components/GitHub';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css'; // Optional: Include if you have global styles

function App() {
  return (
    <div className="app">
      <Navbar />
      <MainPage />
      <About />
      <Skills />
      <Projects />
      <GitHub />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
