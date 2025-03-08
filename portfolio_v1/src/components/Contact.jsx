import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitting: false,
    isSubmitted: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill all required fields',
        isError: true,
        isSubmitting: false,
        isSubmitted: false
      });
      return;
    }
    
    // Set submitting state
    setFormStatus({
      message: '',
      isError: false,
      isSubmitting: true,
      isSubmitted: false
    });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        message: 'Thank you! Your message has been sent.',
        isError: false,
        isSubmitting: false,
        isSubmitted: true
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus({
          message: '',
          isError: false,
          isSubmitting: false,
          isSubmitted: false
        });
      }, 3000);
    }, 1000);
  };
  
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <div className="badge">Get In Touch</div>
          <h2>Contact</h2>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <motion.div 
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Location</h3>
              <p>Paris, France</p>
            </motion.div>
            
            <motion.div 
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p><a href="mailto:contact@joeydavid.com">contact@joeydavid.com</a></p>
            </motion.div>
            
            <motion.div 
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="icon">
                <FaPhone />
              </div>
              <h3>Phone</h3>
              <p><a href="tel:+33123456789">+33 1 23 45 67 89</a></p>
            </motion.div>
          </div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              
              {formStatus.message && (
                <div className={`form-message ${formStatus.isError ? 'error' : 'success'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name">Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={formStatus.isSubmitting}
              >
                {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;