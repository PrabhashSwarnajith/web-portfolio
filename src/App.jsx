import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Education from "./Pages/Education";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from 'framer-motion';

const Footer = () => (
  <footer className="border-t border-white/5">
    <div className="text-center py-6 px-4">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] font-medium">
          Prabhash Swarnajith
        </span>
        . All Rights Reserved.
      </p>
      <p className="text-xs text-gray-600 mt-1">Built with React &amp; Tailwind CSS</p>
    </div>
  </footer>
);

const LandingPage = ({ showWelcome, setShowWelcome }) => {
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
          <Experience />
          <Education />
          <Portofolio />
          <ContactPage />
          <Footer />
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <Footer />
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter
      basename="/web-portfolio/"
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
