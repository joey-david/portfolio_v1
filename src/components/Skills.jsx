import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { 
  Database, 
  Code, 
  Server, 
  Terminal,
  Cpu,
  Network,
  Brain,
  PencilRuler,
  BarChart,
  Globe,
  Github,
  LineChart,
  Sigma,
  Activity,
  Webhook,
  Box,
  Eye,
  Puzzle,
  FileJson,
  Languages,
  Binary,
  Coffee,
  Cloud,
  Cog,
  CircuitBoard,
  MessageSquare,
  Users,
  Lightbulb
} from 'lucide-react';

const Skills = () => {
  // Function to get icon based on skill name
  const getSkillIcon = (skill) => {
    const iconMap = {
      // Concepts
      "Machine Learning": <Sigma size={16} />,
      "Semi-supervised Learning": <Puzzle size={16} />,
      "Natural Language Processing": <Languages size={16} />,
      "Neural Networks": <Brain size={16} />,
      "Finetuning": <Activity size={16} />,
      "Computer Vision": <Eye size={16} />,
      "Algorithms": <Box size={16} />,
      "Networking": <Network size={16} />,
      "Backend": <Server size={16} />,
      "Frontend": <Globe size={16} />,
      "Databases": <Database size={16} />,
      "Deployment": <Cloud size={16} />,
      "System Design": <CircuitBoard size={16} />,
      "Statistics": <BarChart size={16} />,
      
      // Frameworks/Languages
      "Python": <Terminal size={16} />,
      "C++": <Binary size={16} />,
      "JavaScript": <Code size={16} />,
      "SQL": <Database size={16} />,
      "MongoDB": <Database size={16} />,
      "PyTorch": <Activity size={16} />,
      "Tensorflow": <Sigma size={16} />,
      "Pandas": <FileJson size={16} />,
      "HuggingFace": <Brain size={16} />,
      "CUDA": <Cpu size={16} />,
      "Java": <Coffee size={16} />,
      "Spring": <Activity size={16} />,
      
      // Tools/Platforms
      "UNIX/Linux": <Terminal size={16} />,
      "Git": <Github size={16} />,
      "CI/CD": <Cog size={16} />,
      "TCP/IP": <Network size={16} />,
      "REST": <Webhook size={16} />,
      "Docker": <Box size={16} />,
      "Kubernetes": <Globe size={16} />,
      "AWS": <Cloud size={16} />,
      "Compilers": <Code size={16} />,
      "VMs": <Server size={16} />,
      "GPUs": <Cpu size={16} />,
      
      // Communication
      "Articulate communication": <MessageSquare size={16} />,
      "Active listening": <MessageSquare size={16} />,
      "English (Native)": <Languages size={16} />,
      "French (Native)": <Languages size={16} />,
      "Japanese (Intermediate)": <Languages size={16} />,
      
      // Collaboration
      "Cross-functional teamwork": <Users size={16} />,
      "Relationship building": <Users size={16} />,
      "Proactive leadership": <Users size={16} />,
      
      // Problem-Solving
      "Analytical thinking": <Lightbulb size={16} />,
      "Critical reasoning": <Lightbulb size={16} />,
      "Resilience": <Lightbulb size={16} />,
      "Ambiguity navigation": <Lightbulb size={16} />,
      "Agile mindset": <Lightbulb size={16} />,
    };
    
    return iconMap[skill] || <Puzzle size={16} />;
  };

  // Categories of skills with their respective items
  const technicalSkillCategories = [
    {
      category: "Concepts",
      icon: <Brain />,
      skills: [
        "Machine Learning",
        "Semi-supervised Learning",
        "Natural Language Processing",
        "Neural Networks",
        "Finetuning",
        "Computer Vision",
        "Algorithms",
        "Networking",
        "Backend",
        "Frontend",
        "Databases",
        "Deployment",
        "System Design",
        "Statistics"
      ]
    },
    {
      category: "Frameworks",
      icon: <Code />,
      skills: [
        "Python",
        "C++",
        "JavaScript",
        "SQL",
        "MongoDB",
        "PyTorch",
        "Tensorflow",
        "Pandas",
        "HuggingFace",
        "CUDA",
        "Java",
        "Spring"
      ]
    },
    {
      category: "Tools/Platforms",
      icon: <PencilRuler />,
      skills: [
        "UNIX/Linux",
        "Git",
        "CI/CD",
        "TCP/IP",
        "REST",
        "Docker",
        "Kubernetes",
        "AWS",
        "Compilers",
        "VMs",
        "GPUs"
      ]
    }
  ];

  const softSkillCategories = [
    {
      category: "Communication",
      icon: <MessageSquare />,
      skills: [
        "Articulate communication",
        "Active listening",
        "English (Native)",
        "French (Native)",
        "Japanese (Intermediate)"
      ]
    },
    {
      category: "Collaboration",
      icon: <Users />,
      skills: [
        "Cross-functional teamwork",
        "Relationship building",
        "Proactive leadership"
      ]
    },
    {
      category: "Problem-Solving",
      icon: <Lightbulb />,
      skills: [
        "Analytical thinking",
        "Critical reasoning",
        "Resilience",
        "Ambiguity navigation",
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills-section gradient-transition">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {technicalSkillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              variants={itemVariants}
            >
              <h3>
                <span className="category-icon">{category.icon}</span>
                {category.category}
              </h3>
              <div className="skills-pill-container">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-pill"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="skill-pill-icon">
                      {getSkillIcon(skill)}
                    </span>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {softSkillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              variants={itemVariants}
            >
              <h3>
                <span className="category-icon">{category.icon}</span>
                {category.category}
              </h3>
              <div className="skills-pill-container">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-pill"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="skill-pill-icon">
                      {getSkillIcon(skill)}
                    </span>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;