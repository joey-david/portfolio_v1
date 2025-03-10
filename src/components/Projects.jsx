import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'ChatBrain',
      description: 'Developed an application for advanced conversation analysis from multiple sources (text input, logs, screenshots, voice messages) with LLM pipeline integration.',
      image: 'https://github.com/joey-david/chatbrain',
      tags: ['AI', 'PyTorch', 'YOLO'],
      githubUrl: 'https://github.com/joey-david/chatbrain',
      liveUrl: 'https://chatbrain.chat',
      date: 'November 2024 - February 2025',
      category: 'llm'
    },
    {
      id: 2,
      title: 'Agentica',
      description: 'Collection of modular LLM-powered agents for automation, learning, and research with features like spaced repetition flashcards and dynamic task execution.',
      image: '/projects/agentica.webp',
      tags: ['LLMs', 'Agents', 'Python'],
      githubUrl: 'https://github.com/joey-david/agentica',
      date: 'January 2025 - Ongoing',
      category: 'llm'
    },
    {
      id: 3,
      title: 'Neural Network from Scratch',
      description: 'Implemented a pure Numpy neural network achieving multi-class classification across 51 character classes with efficient mini-batch processing.',
      image: '/projects/neural-network.webp',
      tags: ['Python', 'NumPy', 'ML'],
      githubUrl: 'https://github.com/joey-david/neural-network-scratch',
      date: 'July 2024 - August 2024',
      category: 'ml'
    },
    {
      id: 4,
      title: 'CV Analysis Model',
      description: 'Complete design and implementation of a CV analysis model based on natural language processing for Sopra Steria.',
      image: '/projects/cv-analysis.webp',
      tags: ['NLP', 'Java', 'Spring', 'React'],
      date: 'April 2024 - July 2024',
      category: 'llm'
    },
    {
      id: 5,
      title: 'Gas Network Management App',
      description: 'Developed various features in Java, Spring, and React, 100% of which were implemented in the Operation application used by Storengy to manage France\'s gas network.',
      image: '/projects/gas-network.webp',
      tags: ['Java', 'Spring', 'React'],
      date: 'April 2024 - July 2024',
      category: 'other'
    },
    {
      id: 6,
      title: 'Uveitis Diagnosis Model',
      description: 'Semi-supervised learning model for etiological diagnosis of uveitis, a sight-threatening eye inflammation.',
      image: '/projects/uveitis-diagnosis.webp',
      tags: ['AI', 'Semi-supervised', 'Healthcare'],
      date: 'February 2025 - June 2025',
      category: 'ml'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'llm', label: 'Large Language Models' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'other', label: 'Others' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects gradient-transition">
      <div className="container">
        <div className="section-header">
          {/* <div className="badge">My Work</div> */}
          <h2>Projects</h2>
        </div>

        <div className="filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;