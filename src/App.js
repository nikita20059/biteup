// import logo from './logo.svg';
// import './App.css';
// import Home from './Home';
// import Survey from './survey';
// function App() {
//   return (
//     <>
//     {/* <h1>Hello</h1> */}
//     <Home/>
//     <Survey/>
//     </>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Home from "./Home"; // Make sure you have a Home component
import Feedback from "./Feedback";
import Contact from "./Contact";
import About from "./About";
import BoxModelViewer from "./BoxModelViewer";


function App() {
  return (
    <>
    <Router>
      {/* <Link to="/home">The Journal</Link>
      <Link to="/feedback">The Journal</Link><br></br>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link> */}
      <header className="header-container">
      <div className="logo">Biteup.</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <button className="cta-button">Let’s Go</button>
    </header>
      <Routes>
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    {/* <div style={{ width: "100vw", height: "100vh" }}>
      <BoxModelViewer />
    </div> */}
    </>
  );
}

export default App;
