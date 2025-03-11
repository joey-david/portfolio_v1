import React from 'react';
import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';
import './Hero.css';
import { 
  Github, 
  Linkedin, 
  MailOpenIcon,
} from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      }
    }
  };

  // HuggingFace icon as a simple text component
  const HuggingFaceIcon = ({ size = 24, ...props }) => (
    <span style={{ fontSize: size, fontWeight: 'bold', width: '24px', height: '24px', display: 'inline-block', lineHeight: '24px', textAlign: 'center' }} {...props}>
      HF
    </span>
  );

  return (
    <section className="hero hero-section">
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="intro" variants={itemVariants}>
            <h1>Joey David</h1>
            <h2>NLP/ML Student Researcher</h2>
            <p>Working to build helpful intelligent systems that learn, find, and improve.</p>
          </motion.div>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <Link smooth to="/#projects" className="btn">View Projects</Link>
            <a href="https://github.com/joey-david" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <Github size={20} style={{ marginRight: '8px', marginBottom: '-3px' }} />
              GitHub
            </a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <a href="https://linkedin.com/in/joey-david-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin size={24} />
            </a>
            <a href="mailto:joeydavid99@gmail.com" aria-label="Email">
              <MailOpenIcon size={24} />
            </a>
            <a href="https://huggingface.co/j0eyd" target="_blank" rel="noopener noreferrer" aria-label="HuggingFace Profile">
              <HuggingFaceIcon size={24} />
            </a>

          </motion.div>
        </motion.div>
      </div>
      <div className="hero-gradient-bottom"></div>
    </section>
  );
};

export default Hero;