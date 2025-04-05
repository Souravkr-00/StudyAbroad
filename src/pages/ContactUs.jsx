import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    feedback: '',
    experience: 'neutral',
    additionalDetails: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setLoading(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          message: '',
          feedback: '',
          experience: 'neutral',
          additionalDetails: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-layout">
          <div className="contact-sidebar">
            <h2 className="sidebar-title">Get in Touch</h2>
            <p className="sidebar-text">We'd love to hear from you. Drop us a message and we'll get back to you as soon as possible.</p>
            <div className="contact-info">
              <div className="info-item">
                <svg xmlns="http://www.w3.org/2000/svg" className="info-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a8 8 0 01-3.757 5.243zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                </svg>
                <span>123 Business Street, City</span>
              </div>
              <div className="info-item">
                <svg xmlns="http://www.w3.org/2000/svg" className="info-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+1 234 567 8900</span>
              </div>
              <div className="info-item">
                <svg xmlns="http://www.w3.org/2000/svg" className="info-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>contact@company.com</span>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2 className="mobile-title">Get in Touch</h2>
            
            {submitted ? (
              <div className="success-message">
                <svg xmlns="http://www.w3.org/2000/svg" className="success-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="success-title">Thank You!</h3>
                <p className="success-text">Your message has been received. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="form-textarea"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="feedback" className="form-label">Feedback</label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    rows="2"
                    className="form-textarea"
                    placeholder="Any feedback about our products or services?"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Your Experience</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="experience"
                        value="positive"
                        checked={formData.experience === 'positive'}
                        onChange={handleChange}
                        className="radio-input"
                      />
                      <span className="radio-text">Positive</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="experience"
                        value="neutral"
                        checked={formData.experience === 'neutral'}
                        onChange={handleChange}
                        className="radio-input"
                      />
                      <span className="radio-text">Neutral</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="experience"
                        value="negative"
                        checked={formData.experience === 'negative'}
                        onChange={handleChange}
                        className="radio-input"
                      />
                      <span className="radio-text">Negative</span>
                    </label>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="additionalDetails" className="form-label">Additional Details</label>
                  <textarea
                    id="additionalDetails"
                    name="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={handleChange}
                    rows="2"
                    className="form-textarea"
                    placeholder="Any other details you'd like to share"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className={`submit-button ${loading ? 'button-loading' : ''}`}
                >
                  {loading ? (
                    <span className="button-content">
                      <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="spinner-track" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="spinner-path" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;