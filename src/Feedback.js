import React from "react";
import { useNavigate } from "react-router-dom";
import "./Feedback.css";

const Feedback = () => {
  const navigate = useNavigate(); // ✅ Step 1: Initialize useNavigate

  const handleNextPage = (event) => {
    event.preventDefault(); // Prevent form submission (optional)
    navigate("/home"); // ✅ Step 2: Navigate to home page
  };

  return (
    <div className="feedback-container">
      <div className="form-section">
        <h1>
          FEEDBACK ON YOUR CURRENT <span className="highlight">MEALS</span>
        </h1>
        <form onSubmit={handleNextPage}> {/* ✅ Step 3: Add onSubmit handler */}
          <label>1. What is your name? *</label>
          <input type="text" name="name" placeholder="Name" required />

          <label>2. What is your email? *</label>
          <input type="email" name="email" placeholder="Email" required />

          <label>3. Are you a student or working professional? *</label>
          <select name="profession">
            <option value="student">Student</option>
            <option value="working professional">Working Professional</option>
          </select>

          <label>4. What is your age? *</label>
          <select name="age">
            <option value="Under 18">Under 18</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>

          <label>
            5. How interested would you be in ordering food from a service that focuses on authentic,
            home-cooked meals with on-time service? *
          </label>
          <select name="interest">
            <option value="Very interested">Very interested</option>
            <option value="Somewhat interested">Somewhat interested</option>
            <option value="Not interested">Not interested</option>
          </select>

          <button type="submit" className="next-btn">NEXT PAGE</button> {/* ✅ Step 4: Submit triggers navigation */}
        </form>
      </div>

      <div className="contact-section">
        <div className="contact-item">
          <span className="icon">🏠</span>
          <div>
            <h3>Address</h3>
            <p>RSCOE IIF, Service Rd, Ashok Nagar, Tathawade, Pimpri-Chinchwad, Maharashtra 411033</p>
          </div>
        </div>

        <div className="contact-item">
          <span className="icon">📞</span>
          <div>
            <h3>Phone Number</h3>
            <p>+91 9322051181</p>
          </div>
        </div>

        <div className="contact-item">
          <span className="icon">✉️</span>
          <div>
            <h3>Email Address</h3>
            <p>contact@biteup.in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
