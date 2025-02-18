import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaPaperPlane } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mob, setMob] = useState("");
    const [msg, setMsg] = useState("");   
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ name, email,mob,msg }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setEmail("");
            setName("");
            setMob("");
            setMsg("");
        }
    }

  return (
    <>
    
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-box">
        <h3>Just Message Us</h3>
        <form action="" className="contact-form">
          <div className="form-left">
            <input type="text" placeholder="your name" 
                value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="email" 
                value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="number" name="mobile" placeholder="Your Mobile" 
                value={mob} onChange={(e) => setMob(e.target.value)} required/>
          </div>
          <div className="form-divider"></div>
          <div className="form-right">
            <textarea placeholder="Your Message" name="message"
                value={msg} onChange={(e) => setMsg(e.target.value)} required></textarea>
            <button type="submit" className="send-button" onClick={handleOnSubmit}>Send</button>
          </div>
        </form>
      </div>
        
         <footer className="footer-container">
              {/* Newsletter Section */}
              <div className="newsletter-section">
                <label htmlFor="newsletter">Newsletter</label>
                <div className="newsletter-input">
                  <input type="email" id="newsletter" placeholder="Your email" />
                  <button>
                    <FaPaperPlane />
                  </button><br></br><br></br>
                </div>
              </div>
        
              {/* Footer Content */}
              <div className="footer-content">
                <h2 className="footer-logo">Biteup.</h2>
        
                <ul className="footer-links">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
        
                <div className="footer-social">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaYoutube /></a>
                </div>
        
                <p className="footer-copyright">© Copyright 2025 - Biteup</p>
              </div>
            </footer>
        
    </div>
    </>
  );
};

export default Contact;
