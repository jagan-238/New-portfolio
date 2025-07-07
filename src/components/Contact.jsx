import React, { useState } from 'react';
import { Send, Mail, User, Phone, MessageSquare } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import '../styles/contact.css'; // ✅ fixed path

function Contact() {
  const { isDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add API logic here later
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact" className={`contact-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="contact-box">
        <div className="contact-grid">
          {/* Left Section */}
          <div className="contact-left">
            <h2 className="contact-title">Let's Connect</h2>
            <p className="contact-subtitle">
              Have a question or want to work together? Drop me a message, and I'll get back to you as soon as possible.
            </p>

            <div className="contact-info">
              <div className="info-item">
                <Mail className="icon" />
                <span>eragalajaganmohanreddy1160@gmail.com</span>
              </div>
              <div className="info-item">
                <Phone className="icon" />
                <span>+91 8179313022</span>
              </div>
              <div className="info-item">
                <MessageSquare className="icon" />
                <span>Available Mon–Fri, 9AM–6PM</span>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="contact-right">
            <form onSubmit={handleSubmit} className="form">
              <label htmlFor="name">Full Name</label>
              <div className="input-group">
                <User className="input-icon" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <label htmlFor="email">Email</label>
              <div className="input-group">
                <Mail className="input-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <label htmlFor="phone">Phone Number</label>
              <div className="input-group">
                <Phone className="input-icon" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 1234567890"
                />
              </div>

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                required
              />

              <button type="submit" className="submit-btn">
                Send Message <Send className="btn-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
