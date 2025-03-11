import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { MapPin, Mail, Phone } from 'lucide-react'; // Using Lucide icons for consistency
import './Contact.css';

const Contact = () => {
  const form = useRef();
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
    
    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceId = 'YOUR_EMAILJS_SERVICE_ID';
    const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
    const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY';
    
    // Send the email using EmailJS
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
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
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setFormStatus({
          message: 'Sorry, I haven\'t set up the email service yet. Please copy your message and e-mail me!',
          isError: true,
          isSubmitting: false,
          isSubmitted: false
        });
      });
  };
  
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
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
                <MapPin />
              </div>
              <h3>Location</h3>
              <p>Lyon, France</p>
            </motion.div>
            
            <motion.div 
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="icon">
                <Mail />
              </div>
              <h3>Email</h3>
              <p><a href="mailto:joeydavid99@gmail.com">joeydavid99@gmail.com</a></p>
            </motion.div>
            
            <motion.div 
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="icon">
                <Phone />
              </div>
              <h3>Phone</h3>
              <p><a href="tel:+33783367112">+33 7 83 36 71 12</a></p>
            </motion.div>
          </div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
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