import React from 'react';
import { motion } from 'framer-motion';
import { Timeline } from './Timeline';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      title: '2023',
      content: (
        <div className="timeline-card">
          <h3 className="timeline-role">Senior Frontend Developer</h3>
          <p className="timeline-company">InnovateTech Solutions</p>
          <p className="timeline-period">Jan 2023 - Present</p>
          <ul className="timeline-achievements">
            <li>Led the development of a new customer portal using React and TypeScript, improving user engagement by 40%</li>
            <li>Implemented CI/CD pipelines and automated testing, reducing deployment time by 60%</li>
            <li>Mentored junior developers and conducted code reviews to ensure code quality and best practices</li>
          </ul>
        </div>
      ),
    },
    {
      title: '2021',
      content: (
        <div className="timeline-card">
          <h3 className="timeline-role">Frontend Developer</h3>
          <p className="timeline-company">WebFlow Digital</p>
          <p className="timeline-period">Mar 2021 - Dec 2022</p>
          <ul className="timeline-achievements">
            <li>Developed responsive web applications using React, Redux, and modern CSS frameworks</li>
            <li>Collaborated with UX/UI designers to implement pixel-perfect interfaces and animations</li>
            <li>Optimized application performance, achieving a 30% improvement in load times</li>
          </ul>
        </div>
      ),
    },
    {
      title: '2019',
      content: (
        <div className="timeline-card">
          <h3 className="timeline-role">Junior Web Developer</h3>
          <p className="timeline-company">CreativeLabs Studio</p>
          <p className="timeline-period">Jun 2019 - Feb 2021</p>
          <ul className="timeline-achievements">
            <li>Built and maintained client websites using HTML, CSS, JavaScript, and WordPress</li>
            <li>Implemented responsive designs and ensured cross-browser compatibility</li>
            <li>Participated in agile development processes and collaborated with cross-functional teams</li>
          </ul>
        </div>
      ),
    },
    {
      title: '2018',
      content: (
        <div className="timeline-card">
          <h3 className="timeline-role">Frontend Development Intern</h3>
          <p className="timeline-company">TechStart Inc.</p>
          <p className="timeline-period">Jan 2018 - May 2019</p>
          <ul className="timeline-achievements">
            <li>Assisted in developing user interfaces for web applications</li>
            <li>Gained hands-on experience with HTML, CSS, JavaScript, and jQuery</li>
            <li>Collaborated with senior developers on various client projects</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">
            My professional path and key milestones that have shaped my career in web development.
          </p>
        </motion.div>
        
        <Timeline data={experienceData} />
      </div>
    </section>
  );
};

export default Experience;