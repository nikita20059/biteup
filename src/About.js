import React from "react";
import "./About.css"; // Import the CSS file
import { FaChartLine } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaYoutube, FaPaperPlane } from "react-icons/fa";

const founders = [
  { name: "Pavan Shimpi", role: "CEO", img: "/img11.png" },
  { name: "Pavan Shimpi", role: "CEO", img: "/img11.png" },
  { name: "Pavan Shimpi", role: "CEO", img: "/img11.png" },
];
const img24="/img24.png";
const img25="/img25.png";
const img26="/img26.png";
const img27="/img27.png";
const About = () => {
  return (
    <>
    <div>
    <div className="hero-section">
        <div className="hero-content">
          <h1>About Us</h1>
          <p className="p">
            From home-cooked meals to your doorstep, Biteup is here to satisfy
            your cravings with fresh, wholesome meals that taste just like
            <strong> maa ka haath ka khana!</strong>
          </p>
          <button className="know-more-btn">Know More</button>
        </div>
      </div>
      <br></br><br></br>
    <div className="founders-section">
      <h2 className="founders-title">
        Founders, <span className="highlight">you can trust!😊</span> 
      </h2>
      <div className="founders-container">
        {founders.map((founder, index) => (
          <div key={index} className="founder-card">
            <img src={founder.img} alt={founder.name} className="founder-img" />
            <div className="founder-info">
              <p className="founder-name">{founder.name}</p>
              <p className="founder-role">{founder.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="our-story-container">
      <h2 className="section-title">
        Our Story <FaChartLine className="icon" />
      </h2>

      <div className="story-section">
        <img src={img24} alt="Idea Concept" className="story-image" />
        <div className="story-text">
          <h3>The Spark of an Idea</h3>
          <p>
            Biteup’s story began when Pavan Shimpi, the founder, found himself
            frustrated by the same old bland takeout options available to him.
            After a long day of work, he craved something that felt like
            home—something fresh, wholesome, and comforting. He wanted to enjoy
            the delicious flavors of home-cooked food but without the hassle of
            cooking. This led to the simple idea of delivering fresh, home-style
            meals to busy people just like him, who missed the taste of their
            mom's cooking.
          </p>
        </div>
      </div>

      <div className="story-section reverse">
        <div className="story-text">
          <h3>From Idea to Reality</h3>
          <p>
            What started as a simple idea quickly turned into a plan of action.
            Pavan teamed up with like-minded individuals who shared the same
            passion for quality food and service. Together, they set out to
            create a food delivery service that combined the authenticity of
            homemade meals with the convenience of fast delivery. They
            carefully sourced fresh ingredients, worked on perfecting the
            recipes, and focused on making sure that every meal packed in a box
            felt like it.
          </p>
        </div>
        <img src={img25} alt="Reality Concept" className="story-image" />
      </div>
      <div className="story-section">
        <img src={img26} alt="Idea Concept" className="story-image" />
        <div className="story-text">
          <h3>The Spark of an Idea</h3>
          <p>
            Like any new venture, Biteup faced its fair share of challenges.
            From managing logistics to ensuring top-notch quality, the team
            worked tirelessly to build a reputation for delivering the freshest
            meals with a quick turnaround time. They encountered bumps along the
            way—late-night brainstorming sessions, figuring out the perfect
            packaging, and finding the balance between speed and flavor.
          </p>
        </div>
      </div>

      <div className="story-section reverse">
        <div className="story-text">
          <h3>From Idea to Reality</h3>
          <p>
            What started as a simple idea quickly turned into a plan of action.
            Pavan teamed up with like-minded individuals who shared the same
            passion for quality food and service. Together, they set out to
            create a food delivery service that combined the authenticity of
            homemade meals with the convenience of fast delivery. They
            carefully sourced fresh ingredients, worked on perfecting the
            recipes, and focused on making sure that every meal packed in a box
            felt like it was made in a loving kitchen.
          </p>
        </div>
        <img src={img27} alt="Reality Concept" className="story-image" />
      </div>
    </div>

    <footer className="footer-container">
          {/* Newsletter Section */}
          <div className="newsletter-section">
            <label htmlFor="newsletter">Newsletter</label>
            <div className="newsletter-input">
              <input type="email" id="newsletter" placeholder="Your email" />
              <button>
                <FaPaperPlane />
              </button>
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

export default About;
