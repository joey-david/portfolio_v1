import React, { useState, useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleEasterEgg = () => {
    setShowEasterEgg(true);
    // Play the sound when easter egg is triggered
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset audio to start
      audioRef.current.play();
    }
    setTimeout(() => {
      setShowEasterEgg(false);
    }, 1500); // Shows for 2 seconds
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <Link to="/#" className="logo">
            Joey <span>Dav<span 
              onClick={handleEasterEgg}
              style={{ cursor: 'pointer' }}
            >i</span>d</span>
          </Link>
          
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link smooth to="/#about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link smooth to="/#projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
            <li><Link smooth to="/#experience" onClick={() => setIsMenuOpen(false)}>Experience</Link></li>
            <li><Link smooth to="/#skills" onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
            <li><Link smooth to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            <li>
              <motion.a 
                href="/resume.pdf" 
                target="_blank" 
                className="resume-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Audio element for easter egg sound */}
      <audio ref={audioRef} className="easter-egg-sound">
        <source src="/meow.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            className="easter-egg-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="easter-egg-content">
              <h1>Normiaou</h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;