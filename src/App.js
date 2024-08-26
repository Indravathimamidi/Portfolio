import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.scss';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
