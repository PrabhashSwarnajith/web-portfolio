import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Research from './pages/Research';
import AnimatedBackground from './Background';
import Navbar from './Navbar';
import Portofolio from './pages/Portofolio';
import ContactPage from './pages/Contact';
import WelcomeScreen from './pages/WelcomeScreen';
import Footer from './Footer';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    AOS.init({ once: true, offset: 10, duration: 500, easing: 'ease-out-cubic' });
    const onResize = () => AOS.refresh();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Skills />
          <Research />
          <Experience />
          <Education />
          <Portofolio />
          <ContactPage />
          <Footer />
        </>
      )}
    </>
  );
}
