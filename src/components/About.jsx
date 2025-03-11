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
              <p> I’m Joey David, a developer and AI student with a passion for building intelligent systems that solve real-world problems. Over the past few years, I’ve gained hands-on experience in machine learning, natural language processing, and full-stack development. More recently, I've been digging deeper into AI research (especially in the medical field, given my current position). </p>
              <p> I'm comfortable with modern AI frameworks, with a strong foundation in computer vision, neural networks, and deployment tools. I'm passionate about the intricacies of making machines reason, and grateful that the forefront of AI advancements is moving in that direction - it's something I strongly want to be a part of. </p>
              <p> When I’m not writing code, I enjoy hiking, cycling, chess, music, and exploring new languages. Don't hesitate to reach out! </p>
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