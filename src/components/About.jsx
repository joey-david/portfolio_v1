import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section gradient-transition">
      <div className="container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-text">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="about-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                I'm Joey David, a passionate full-stack developer with a deep interest in creating 
                elegant, efficient, and user-friendly applications. My journey in software development 
                began over 4 years ago, and I've since honed my skills across various technologies 
                and frameworks.
              </p>
              <p>
                I specialize in React, Node.js, and modern web technologies, always staying current 
                with the latest developments in the tech world. My approach combines technical expertise 
                with creative problem-solving to build solutions that not only work well but also provide 
                exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through technical writing and mentoring.
              </p>
            </motion.div>
            <motion.div 
              className="about-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="#contact" className="cta-button">Get In Touch</a>
              <a href="#projects" className="cta-button">View My Work</a>
              {/* <div className="experience-badge">
                <span className="years">4+</span>
                <span className="text">Years<br/>Experience</span>
              </div> */}
            </motion.div>
          </div>
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="image-container">
              <img src="/src/assets/profile_picture.png" alt="Joey David" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;