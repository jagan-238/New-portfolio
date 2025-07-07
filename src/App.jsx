import React from 'react';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import MainPage from './components/MainPage';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import GitHub from './components/GitHub';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import './App.css'; // Optional: Include if you have global styles

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <MainPage />
        <AboutMe />
        <Skills />
        <Projects />
        <GitHub />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
