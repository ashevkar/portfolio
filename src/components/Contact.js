import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contact-container">
    <div>
    <h1>LET'S WORK TOGETHER</h1>
    </div>
             <br/>

      <form className="contact-form">
        <div className="form-group">
            <label for="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
            <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Your@email.com"
            required
          />
        </div>
        <div className="form-group">
            <label for="message">Message:</label>
          <textarea
            name="message"
            placeholder="Message"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
