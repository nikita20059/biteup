// // import React from "react";
// // import "./Home.css";

// // function Home() {
// //     const founders = [
// //         { name: "John Doe", post: "CEO", image: "/founder.jpg" },
// //         { name: "Jane Smith", post: "CTO", image: "/founder.jpg" },
// //         { name: "Alex Brown", post: "COO", image: "/founder.jpg" },
// //         { name: "Emily Clark", post: "CMO", image: "/founder.jpg" },
// //       ];
// //     const img1 = "/Img1.png";
// //     const logopink ="/Logopink.png"
// //     const pinkarrow = "/PinkArrow.png";
// //     const img2 = "/Img2.png";
// //     const img3 = "/Img3.png";
// //     const img4 = "/Img4.png";
// //     const img5 = "/Img5.png";
// //     const img6 = "/log6.png";
// //     const img7 = "/Img7.png";
// //     const img8 = "/Img8.png";


// //   return (
// //     <>
// //     <div className="homepage">
// //       {/* Navbar */}
// //       <nav className="navbar">
// //         {/* <h1 className="logo">Biteup<span className="dot">.</span></h1> */}
// //         <h1 className="logo" src={logopink}><span className="dot">.</span></h1>
// //         <ul className="nav-links">
// //           <li><a href="#">Home</a></li>
// //           <li><a href="#">About us</a></li>
// //           <li><a href="#">Partners</a></li>
// //           <li><a href="#">Servies</a></li>
// //           <li><a href="#">Contact us</a></li>
// //         </ul>
// //       </nav>

// //       {/* Main Section */}
// //       <section className="hero">
// //         <div className="cont">
// //             <div className="box-container">
// //             {/* <img src={pinkarrow} alt="PinkArrow" className="pinkArrow"/> */}

// //             <img src={img1} alt="Hunger Box" className="hunger-box"/>
// //             {/* <img src={pinkarrow} alt="PinkArrow" className="pinkArrow"/> */}

// //             </div>
// //             <img src={pinkarrow} alt="PinkArrow" className="pinkArrow"/>
// //         </div>
// //         <h2 className="title">The Hunger Box</h2>
// //         <p className="description">
// //           Biteup is your go-to food delivery buddy, serving fresh, homestyle meals that 
// //           taste just like maa ke haath ka khaana—perfect for college students and busy professionals.
// //         </p>
// //       </section>
// //     </div>

//     // <div className="delivery-page">
//     //   {/* Features Section */}
//     //   <div className="features">
//     //     <div className="feature">
//     //       <span className="feature-number">1</span>
//     //       <img src={img2} alt="Fresh Ingredients" />
//     //       <p><strong>Fresh Ingredients, Guaranteed Quality</strong></p>
//     //     </div>
//     //     <div className="feature">
//     //       <span className="feature-number">2</span>
//     //       <img src={img3} alt="Homestyle Cooking" />
//     //       <p><strong>Homestyle Cooking, Just Like Maa’s Kitchen</strong></p>
//     //     </div>
//     //     <div className="feature">
//     //       <span className="feature-number">3</span>
//     //       <img src={img4} alt="Hygiene First" />
//     //       <p><strong>Hygiene First, Food You Can Trust</strong></p>
//     //     </div>
//     //     <div className="feature">
//     //       <span className="feature-number">4</span>
//     //       <img src={img5} alt="Balanced Meals" />
//     //       <p><strong>Balanced Wholesome Meals</strong></p>
//     //     </div>
//     //   </div>

//     //   {/* Delivery & Box Section */}
//     //   <div className="delivery-section">
//     //     <img src={img6} alt="Delivery" className="delivery-image" />
//     //     <span className="feature-number large">5</span>
//     //     <img src={img1} alt="Hunger Box" className="hunger-box" />
//     //     <p className="delivery-text"><strong>Fast & Fresh Delivery</strong></p>
//     //   </div>
//     // </div>
// //     <div className="awards-page">
// //       <h1 className="awards-title">Awards Received</h1>
// //       <div className="awards-container">
// //         <div className="award">
// //           <img src={img7} alt="Fast & Foodious Delivery Award" />
// //           <p className="award-text">Fast & Foodious Delivery Award</p>
// //         </div>
// //         <div className="award">
// //           <img src={img7} alt="The Thali That Stole Your Heart Award" />
// //           <p className="award-text">The Thali That Stole Your Heart Award</p>
// //         </div>
// //         <div className="award">
// //           <img src={img7} alt="Maa Ke Haath Ka Toughest Competitor" />
// //           <p className="award-text">Maa Ke Haath Ka Toughest Competitor</p>
// //         </div>
// //       </div>
// //     </div>
// //     <div className="vision-mission-page">
// //       <h1 className="title">Our vision and mission</h1>
// //       <div className="section">
// //         <h2 className="sub-title">vision</h2>
// //         <p className="description">
// //           Say goodbye to boring food and kitchen struggles! <br />
// //           We serve fresh, homely thalis that taste just like maa ke haath ka khaana – minus the drama!
// //         </p>
// //       </div>
// //       <div className="section">
// //         <h2 className="sub-title">mission</h2>
// //         <p className="description">
// //           We're on a mission to make tasty, home-style meals the easiest choice ever <br />
// //           fresh, fast, and delivered with love!
// //         </p>
// //       </div>
// //     </div>
// //     <div className="founders-page">
// //       <h1 className="title">Founders</h1>
// //       <h2 className="subtitle">you can trust!</h2>
// //       <div className="founders-container">
// //         {founders.map((founder, index) => (
// //           <div key={index} className="founder-card">
// //             <div className="founder-image">
// //               <img src={img8} alt={founder.name} />
// //             </div>
// //             <h3 className="founder-name">{founder.name}</h3>
// //             <p className="founder-post">{founder.post}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //     <footer className="footer">
// //       <div className="footer-logo">
// //         <h1>Biteup<span className="registered">®</span></h1>
// //       </div>
// //       <div className="footer-text">
// //         <p>footer</p>
// //       </div>
// //       <div className="footer-copyright">
// //         <p>copyright</p>
// //       </div>
// //     </footer>
// //         </>
// //   );
// // }

// // export default Home;
 
// import React, { useState } from "react";
// import "./Home.css";
// import { RxArrowBottomRight } from "react-icons/rx";
// import { FaFacebookF, FaTwitter, FaYoutube, FaPaperPlane } from "react-icons/fa";
// import HoverVideoPlayer from 'react-hover-video-player';
// import BoxModelViewer from "./BoxModelViewer";


// const Home = () => {
//   const img9 = process.env.PUBLIC_URL + "/img9.png";

//   // const img9 = "/img9.png";
//   const img10 = process.env.PUBLIC_URL + "/img10.png";
//   const img11 = process.env.PUBLIC_URL + "/img11.png";
//   const img12 = process.env.PUBLIC_URL + "/img12.png";
//   const img13 = process.env.PUBLIC_URL + "/img13.png";
//   const img14 = process.env.PUBLIC_URL + "/img14.png";
//   const img15 = process.env.PUBLIC_URL + "/img15.png";
//   const img16 = process.env.PUBLIC_URL + "/img16.png";
//   const img17 = process.env.PUBLIC_URL + "/img17.png";
//   const img18 = process.env.PUBLIC_URL + "/img18.png";
//   const img19 = process.env.PUBLIC_URL + "/img19.png";
//   const img19bg =process.env.PUBLIC_URL +  "/img19bg.png";
//   const img20 = process.env.PUBLIC_URL +  "/img20.png";
//   const img21 = process.env.PUBLIC_URL +  "/img21.png";
//   const img22 = process.env.PUBLIC_URL +  "/img22.png";
//   const img23 = process.env.PUBLIC_URL +  "/img23.png";


//   const [selected, setSelected] = useState(null);

//   const teamMembers = [
//     { id: 1, name: "Pavan Shimpi", image: img11 },
//     { id: 2, name: "Pavan Shimpi", image: img11 },
//     { id: 3, name: "Pavan Shimpi", image: img11 },
//     { id: 4, name: "Pavan Shimpi", image: img11 },
//     { id: 5, name: "Pavan Shimpi", image: img11 },
//     { id: 6, name: "Pavan Shimpi", image: img11 }
// ];

//   const awardsData = [
//     { title: "The Thali That Stole Your Heart Award", image: img12 },
//     { title: "Zero Maggi Days Champion", image: img12 },
//     { title: "Zero Maggi Days Champion", image: img12 },
//     { title: "Zero Maggi Days Champion", image: img12 },

//   ];
//   const founders = [
//     { name: "Pavan Shimpi", role: "CEO", image: img11 },
//     { name: "Pavan Shimpi", role: "CEO", image: img11 },
//     { name: "Pavan Shimpi", role: "CEO", image: img11 },
//   ];
//   return (
//     <>
//       <div className="hungerbox-container">
//       {/* <header className="header-container">
//       <div className="logo">Biteup.</div>
//       <nav className="nav-links">
//         <a href="#">Home</a>
//         <a href="#">About Us</a>
//         <a href="#">Contact</a>
//       </nav>
//       <button className="cta-button">Let’s Go</button>
//     </header> */}
//         <div className="container">
//           <div className="card">
//             <div className="title-banner">
//               <h1 className="title">The HungerBox</h1>
//             </div>
//             <div className="content">
//               <img src={img9} alt="HungerBox" className="box-image" />
//               <p className="description">
//                 Get ready to experience a game-changer!<br /> 
//                 The wait is almost over 🥳<br />
//                 HungerBox is about to be revealed!<br />
//                 Stay hungry, just scroll down to reveal! ⚡😉
//               </p>
//             </div>
//             <div className="scroll-icon">
//               <span><RxArrowBottomRight /></span>
//             </div>
//           </div>
//         </div>
//         <section className="celebration">
//           {/* <div className="confetti"></div>
//           <div className="video-containeer">
//       <video controls width="100%" height="auto">
//         <source src="/Proxy Sequence.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div> */}
//     {/* <div style={{ width: "10vw", height: "10vh" }}> */}
//     <div className="boxModel">
//           <BoxModelViewer />
//         </div>
//         </section>

//         {/* <div className="team-container">
//       <h2 className="team-title">Meet <span>Our Team</span></h2>
//       <div className="team-grid">
//         {teamMembers.map((member) => (
          
//           <div 
//             key={member.id} 
//             className={`team-card ${selected === member.id ? "selected" : ""}`} 
//             onClick={() => setSelected(member.id)}
//           >
//             <img src={member.image} alt={member.name} className="team-image" />
            
//             <div className="team-name">{member.name}</div>
//           </div>
//         ))}
//       </div>
//     </div> */}
//     <div className="team-container">
//   <h2 className="team-title">Meet <span>Our Team</span></h2>
//   <div className="team-grid">
//     {teamMembers.map((member) => (
//       <div 
//         key={member.id} 
//         className={`team-card ${selected === member.id ? "selected" : ""}`} 
//         onClick={() => setSelected(member.id)}
//       >
//         <div className="team-image-container">
//           <img 
//             src={member.image} 
//             alt={member.name} 
//             className="team-image" 
//           />
//           <div className="team-overlay">
//             <div className="team-overlay-text">Co-Founder</div>
//           </div>
//         </div>
//         <div className="team-name">{member.name}</div>
//       </div>
//     ))}
//   </div>
// </div>


//     <div className="awards-container">
//       <h2 className="awards-title">Awards</h2>
//       {awardsData.map((award, index) => (
//         <div key={index} className="awards-box">
//           <img src={award.image} alt="Trophy" className="awards-image" />
//           <h3 className="awards-text">{award.title}</h3>
//         </div>
//       ))}
//     </div>
    
    

//     <div className="mission-vision-container">
//       <h2 className="title">Our Mission & Vision</h2>
//       <div className="circle">
//         <div className="half-section top-section">
//           <h3 className="section-tittle mission-title">Mission</h3>
//           <p className="section-subtitle">Fresh Bites, Zero Fights!</p>
//           <p className="section-text">
//             "Say goodbye to boring food and kitchen struggles! We serve fresh, 
//             homely thalis that taste just like maa ke haath ka khaana – minus the drama."
//           </p>
//         </div>
//         <div className="divider"></div>
//         <div className="half-section bottom-section">
//           <h3 className="section-tittle vision-title">Vision</h3>
//           <p className="section-subtitle">No More “Aaj Khaane Mein Kya Hai?”</p>
//           <p className="section-text">
//             "We're on a mission to make tasty, home-style meals the easiest choice ever – 
//             fresh, fast, and delivered with love!"
//           </p>
//         </div>
//       </div>
//     </div>

//     <div className="hungerbox-containerr">

//       <div className="hungerbox-contentt">
//       <h2 className="title">Meal Roedmap</h2>

//         <img src={img13} alt="Hunger Box" className="hungerbox-imagee" />
//         <h2 className="hungerbox-titlee">The HungerBox</h2>
//         <p className="hungerbox-descriptionn">
//           Biteup is your go-to food delivery buddy, serving fresh, homestyle meals 
//           that taste just like maa ke haath ka khaana—perfect for college students 
//           and busy professionals.
//         </p>
//         <button className="hungerbox-buttonn">Lets Go</button>
        
//       </div>

//     </div>

//     <div className="special-container">
//       <h2 className="special-title">
//         What’s so Special? <span role="img" aria-label="thinking">🤔</span>
//       </h2>

//       <div className="special-grid">
//         <div className="special-item">
//           <span className="special-number">1</span>
//           <img src={img14} alt="Fresh Ingredients" className="special-image" />
//           <p className="special-text">Fresh Ingredients, Guaranteed Quality</p>
//         </div>

//         <div className="special-item">
//           <span className="special-number">2</span>
//           <img src={img15} alt="Homestyle Cooking" className="special-image" />
//           <p className="special-text">Homestyle Cooking, Just Like Maa’s Kitchen</p>
//         </div>

//         <div className="special-item">
//           <span className="special-number">3</span>
//           <img src={img16} alt="Hygiene First" className="special-image" />
//           <p className="special-text">Hygiene First, Food You Can Trust</p>
//         </div>

//         <div className="special-item">
//           <span className="special-number">4</span>
//           <img src={img17} alt="Balanced Meals" className="special-image" />
//           <p className="special-text">Balanced Wholesome Meals</p>
//         </div>

        
//       </div>
//       <div className="special-item large">
//           <span className="special-number large-number">5</span>
//           <img src={img18} alt="Fast Delivery" className="special-image" />
//           {/* <p className="special-text">Fast & Fresh Delivery</p> */}
//         </div>          <p className="special-textt">Fast & Fresh Delivery</p>

//         <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

//     </div>

//     <div className="awards-container">
//       <h2 className="awards-title">
//         Awards Received <span role="img" aria-label="lightning">⚡</span>
//       </h2>

//       <div className="awards-grid">
//         <div className="award-item">
//           <img src={img19} alt="Fast Delivery Award" className="award-image" />
//           <p className="award-text">Fast & Foodious Delivery Award</p>
//         </div>

//         <div className="award-item-highlight">
//           <img src={img19bg} alt="Thali Heart Award" className="award-image" /><br></br>
//           <p className="award-text">The Thali That Stole <br></br>
//           Your Heart Award</p>
//         </div>

//         <div className="award-item">
//           <img src={img19} alt="Maa Ke Haath Ka Award" className="award-image" />
//           <p className="award-text">Maa Ke Haath Ka Toughest Competitor</p>
//         </div>
//       </div>
//     </div>

//     <div className="mission-vision-container">
//       <h2 className="title">Our Mission & Vision</h2>
//       <div className="circle">
//         <div className="half-section top-section">
//           <h3 className="section-tittle mission-title">Mission</h3>
//           <p className="section-subtitle">Fresh Bites, Zero Fights!</p>
//           <p className="section-text">
//             "Say goodbye to boring food and kitchen struggles! We serve fresh, 
//             homely thalis that taste just like maa ke haath ka khaana – minus the drama."
//           </p>
//         </div>
//         <div className="divider"></div>
//         <div className="half-section bottom-section">
//           <h3 className="section-tittle vision-title">Vision</h3>
//           <p className="section-subtitle">No More “Aaj Khaane Mein Kya Hai?”</p>
//           <p className="section-text">
//             "We're on a mission to make tasty, home-style meals the easiest choice ever – 
//             fresh, fast, and delivered with love!"
//           </p>
//         </div>
//       </div>
//     </div>
//     <h2 className="founderss-title">
//         <strong>Founders</strong>, you can <span className="highlight">trust!😊</span> 
//       </h2>
//     <div className="founders-container">
      

//       <div className="founders-grid">
//         {founders.map((founder, index) => (
//           <div key={index} className="founder-card">
//             <img src={founder.image} alt={founder.name} className="founder-image" />
//             <p className="founder-name">{founder.name}</p>
//             <p className="founder-role">{founder.role}</p>
//           </div>
//         ))}
//       </div>
//     </div>

//     <div className="roadmap-container">
//       <h2 className="roadmap-title">
//         Meal <span className="highlight">Roadmap</span> <span className="flag">🏴</span>
//       </h2>

//       <div className="roadmap">
//         {/* Left Side */}
//         <div className="roadmap-left">
//           <div className="roadmap-item">
//           <div className="roadmap-line-horizontal"></div>
//             <p><strong>Fresh Ingredients,</strong><br /> Guaranteed Quality</p>
//             <div className="roadmap-circle">
//               <img src={img20} alt="Fresh Ingredients" />
//             </div>
            
//           </div>

//           <div className="roadmap-item">
//           <div className="roadmap-line-horizontal"></div>
//             <p><strong>Hygiene First</strong> –<br /> Food You Can Trust</p>
//             <div className="roadmap-circle">
//               <img src={img21} alt="Fresh Ingredients" />
//             </div>
//           </div>

//           <div className="roadmap-item">
//           <div className="roadmap-line-horizontal"></div>
//             <p><strong>Fast & Fresh Delivery</strong></p>
//             <div className="roadmap-circle">
//               <img src={img22} alt="Fast & Fresh Delivery" />
//             </div>
            
//           </div>
//         </div>

//         {/* Middle Vertical Line */}
//         <div className="roadmap-line-vertical"></div>

//         {/* Right Side */}
//         <div className="roadmap-right">
//           <div className="roadmap-item">
//             <div className="roadmap-line-horizontal"></div>
//             <p><strong>Homestyle Cooking</strong> –<br /> Just Like Maa’s Kitchen</p>
//             <div className="roadmap-circle">
//               <img src={img23} alt="Homestyle Cooking" />
//             </div>
//           </div>

//           <div className="roadmap-item">
//             <div className="roadmap-line-horizontal"></div>
//             <p><strong>Balanced,</strong><br /> Wholesome Meals</p>
//             <div className="roadmap-circle">
//               <img src={img20} alt="Balanced Meals" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <footer className="footer-container">
//       {/* Newsletter Section */}
//       <div className="newsletter-section">
//         <label htmlFor="newsletter">Newsletter</label>
//         <div className="newsletter-input">
//           <input type="email" id="newsletter" placeholder="Your email" />
//           <button>
//             <FaPaperPlane />
//           </button>
//         </div>
//       </div>

//       {/* Footer Content */}
//       <div className="footer-content">
//         <h2 className="footer-logo">Biteup.</h2>

//         <ul className="footer-links">
//           <li><a href="#">Home</a></li>
//           <li><a href="#">About Us</a></li>
//           <li><a href="#">Contact</a></li>
//         </ul>

//         <div className="footer-social">
//           <a href="#"><FaFacebookF /></a>
//           <a href="#"><FaTwitter /></a>
//           <a href="#"><FaYoutube /></a>
//         </div>

//         <p className="footer-copyright">© Copyright 2025 - Biteup</p>
//       </div>
//     </footer>

//       </div>
//     </>
//   );
// };

// export default Home;

// import React from "react";
// import "./Home.css";

// function Home() {
//     const founders = [
//         { name: "John Doe", post: "CEO", image: "/founder.jpg" },
//         { name: "Jane Smith", post: "CTO", image: "/founder.jpg" },
//         { name: "Alex Brown", post: "COO", image: "/founder.jpg" },
//         { name: "Emily Clark", post: "CMO", image: "/founder.jpg" },
//       ];
//     const img1 = "/Img1.png";
//     const logopink ="/Logopink.png"
//     const pinkarrow = "/PinkArrow.png";
//     const img2 = "/Img2.png";
//     const img3 = "/Img3.png";
//     const img4 = "/Img4.png";
//     const img5 = "/Img5.png";
//     const img6 = "/log6.png";
//     const img7 = "/Img7.png";
//     const img8 = "/Img8.png";


//   return (
//     <>
//     <div className="homepage">
//       {/* Navbar */}
//       <nav className="navbar">
//         {/* <h1 className="logo">Biteup<span className="dot">.</span></h1> */}
//         <h1 className="logo" src={logopink}><span className="dot">.</span></h1>
//         <ul className="nav-links">
//           <li><a href="#">Home</a></li>
//           <li><a href="#">About us</a></li>
//           <li><a href="#">Partners</a></li>
//           <li><a href="#">Servies</a></li>
//           <li><a href="#">Contact us</a></li>
//         </ul>
//       </nav>

//       {/* Main Section */}
//       <section className="hero">
//         <div className="cont">
//             <div className="box-container">
//             {/* <img src={pinkarrow} alt="PinkArrow" className="pinkArrow"/> */}

//             <img src={img1} alt="Hunger Box" className="hunger-box"/>
//             {/* <img src={pinkarrow} alt="PinkArrow" className="pinkArrow"/> */}

//             </div>
//             <img src={pinkarrow} alt="PinkArrow" className="pinkArrow"/>
//         </div>
//         <h2 className="title">The Hunger Box</h2>
//         <p className="description">
//           Biteup is your go-to food delivery buddy, serving fresh, homestyle meals that 
//           taste just like maa ke haath ka khaana—perfect for college students and busy professionals.
//         </p>
//       </section>
//     </div>

    // <div className="delivery-page">
    //   {/* Features Section */}
    //   <div className="features">
    //     <div className="feature">
    //       <span className="feature-number">1</span>
    //       <img src={img2} alt="Fresh Ingredients" />
    //       <p><strong>Fresh Ingredients, Guaranteed Quality</strong></p>
    //     </div>
    //     <div className="feature">
    //       <span className="feature-number">2</span>
    //       <img src={img3} alt="Homestyle Cooking" />
    //       <p><strong>Homestyle Cooking, Just Like Maa’s Kitchen</strong></p>
    //     </div>
    //     <div className="feature">
    //       <span className="feature-number">3</span>
    //       <img src={img4} alt="Hygiene First" />
    //       <p><strong>Hygiene First, Food You Can Trust</strong></p>
    //     </div>
    //     <div className="feature">
    //       <span className="feature-number">4</span>
    //       <img src={img5} alt="Balanced Meals" />
    //       <p><strong>Balanced Wholesome Meals</strong></p>
    //     </div>
    //   </div>

    //   {/* Delivery & Box Section */}
    //   <div className="delivery-section">
    //     <img src={img6} alt="Delivery" className="delivery-image" />
    //     <span className="feature-number large">5</span>
    //     <img src={img1} alt="Hunger Box" className="hunger-box" />
    //     <p className="delivery-text"><strong>Fast & Fresh Delivery</strong></p>
    //   </div>
    // </div>
//     <div className="awards-page">
//       <h1 className="awards-title">Awards Received</h1>
//       <div className="awards-container">
//         <div className="award">
//           <img src={img7} alt="Fast & Foodious Delivery Award" />
//           <p className="award-text">Fast & Foodious Delivery Award</p>
//         </div>
//         <div className="award">
//           <img src={img7} alt="The Thali That Stole Your Heart Award" />
//           <p className="award-text">The Thali That Stole Your Heart Award</p>
//         </div>
//         <div className="award">
//           <img src={img7} alt="Maa Ke Haath Ka Toughest Competitor" />
//           <p className="award-text">Maa Ke Haath Ka Toughest Competitor</p>
//         </div>
//       </div>
//     </div>
//     <div className="vision-mission-page">
//       <h1 className="title">Our vision and mission</h1>
//       <div className="section">
//         <h2 className="sub-title">vision</h2>
//         <p className="description">
//           Say goodbye to boring food and kitchen struggles! <br />
//           We serve fresh, homely thalis that taste just like maa ke haath ka khaana – minus the drama!
//         </p>
//       </div>
//       <div className="section">
//         <h2 className="sub-title">mission</h2>
//         <p className="description">
//           We're on a mission to make tasty, home-style meals the easiest choice ever <br />
//           fresh, fast, and delivered with love!
//         </p>
//       </div>
//     </div>
//     <div className="founders-page">
//       <h1 className="title">Founders</h1>
//       <h2 className="subtitle">you can trust!</h2>
//       <div className="founders-container">
//         {founders.map((founder, index) => (
//           <div key={index} className="founder-card">
//             <div className="founder-image">
//               <img src={img8} alt={founder.name} />
//             </div>
//             <h3 className="founder-name">{founder.name}</h3>
//             <p className="founder-post">{founder.post}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//     <footer className="footer">
//       <div className="footer-logo">
//         <h1>Biteup<span className="registered">®</span></h1>
//       </div>
//       <div className="footer-text">
//         <p>footer</p>
//       </div>
//       <div className="footer-copyright">
//         <p>copyright</p>
//       </div>
//     </footer>
//         </>
//   );
// }

// export default Home;
 
import React, { useState } from "react";
import "./Home.css";
import { RxArrowBottomRight } from "react-icons/rx";
import { FaFacebookF, FaTwitter, FaYoutube, FaPaperPlane } from "react-icons/fa";
import HoverVideoPlayer from 'react-hover-video-player';
import BoxModelViewer from "./BoxModelViewer";


const Home = () => {
  const img9 = process.env.PUBLIC_URL + "/img9.png";

  // const img9 = "/img9.png";
  const img10 = process.env.PUBLIC_URL + "/img10.png";
  const img11 = process.env.PUBLIC_URL + "/../public/img11.PNG";
  const img12 = process.env.PUBLIC_URL + "/img12.png";
  const img13 = process.env.PUBLIC_URL + "/img13.png";
  const img14 = process.env.PUBLIC_URL + "/img14.png";
  const img15 = process.env.PUBLIC_URL + "/img15.png";
  const img16 = process.env.PUBLIC_URL + "/img16.png";
  const img17 = process.env.PUBLIC_URL + "/img17.png";
  const img18 = process.env.PUBLIC_URL + "/img18.png";
  const img19 = process.env.PUBLIC_URL + "/img19.png";
  const img19bg =process.env.PUBLIC_URL +  "/img19bg.png";
  const img20 = process.env.PUBLIC_URL +  "/img20.png";
  const img21 = process.env.PUBLIC_URL +  "/img21.png";
  const img22 = process.env.PUBLIC_URL +  "/img22.png";
  const img23 = process.env.PUBLIC_URL +  "/img23.png";


  const [selected, setSelected] = useState(null);

  const teamMembers = [
    { id: 1, name: "Pavan Shimpi", image: img11 },
    { id: 2, name: "Pavan Shimpi", image: img11 },
    { id: 3, name: "Pavan Shimpi", image: img11 },
    { id: 4, name: "Pavan Shimpi", image: img11 },
    { id: 5, name: "Pavan Shimpi", image: img11 },
    { id: 6, name: "Pavan Shimpi", image: img11 }
];

  const awardsData = [
    { title: "The Thali That Stole Your Heart Award", image: img12 },
    { title: "Zero Maggi Days Champion", image: img12 },
    { title: "Zero Maggi Days Champion", image: img12 },
    { title: "Zero Maggi Days Champion", image: img12 },

  ];
  const founders = [
    { name: "Pavan Shimpi", role: "CEO", image: img11 },
    { name: "Pavan Shimpi", role: "CEO", image: img11 },
    { name: "Pavan Shimpi", role: "CEO", image: img11 },
  ];
  return (
    <>
      <div className="hungerbox-container">
      {/* <header className="header-container">
      <div className="logo">Biteup.</div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </nav>
      <button className="cta-button">Let’s Go</button>
    </header> */}
        <div className="container">
          <div className="card">
            <div className="title-banner">
              <h1 className="title">The HungerBox</h1>
            </div>
            <div className="content">
              <img src={img9} alt="HungerBox" className="box-image" />
              <p className="description">
                Get ready to experience a game-changer!<br /> 
                The wait is almost over 🥳<br />
                HungerBox is about to be revealed!<br />
                Stay hungry, just scroll down to reveal! ⚡😉
              </p>
            </div>
            <div className="scroll-icon">
              <span><RxArrowBottomRight /></span>
            </div>
          </div>
        </div>
        <section className="celebration">
          {/* <div className="confetti"></div>
          <div className="video-containeer">
      <video controls width="100%" height="auto">
        <source src="/Proxy Sequence.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div> */}
    {/* <div style={{ width: "10vw", height: "10vh" }}> */}
    <div className="boxModel">
          <BoxModelViewer />
        </div>
        </section>

        {/* <div className="team-container">
      <h2 className="team-title">Meet <span>Our Team</span></h2>
      <div className="team-grid">
        {teamMembers.map((member) => (
          
          <div 
            key={member.id} 
            className={`team-card ${selected === member.id ? "selected" : ""}`} 
            onClick={() => setSelected(member.id)}
          >
            <img src={member.image} alt={member.name} className="team-image" />
            
            <div className="team-name">{member.name}</div>
          </div>
        ))}
      </div>
    </div> */}
    <div className="team-container">
  <h2 className="team-title">Meet <span>Our Team</span></h2>
  <div className="team-grid">
    {teamMembers.map((member) => (
      <div 
        key={member.id} 
        className={`team-card ${selected === member.id ? "selected" : ""}`} 
        onClick={() => setSelected(member.id)}
      >
        <div className="team-image-container">
          <img 
            src={member.image} 
            alt={member.name} 
            className="team-image" 
          />
          <div className="team-overlay">
            <div className="team-overlay-text">Co-Founder</div>
          </div>
        </div>
        <div className="team-name">{member.name}</div>
      </div>
    ))}
  </div>
</div>


    <div className="awards-container">
      <h2 className="awards-title">Awards</h2>
      {awardsData.map((award, index) => (
        <div key={index} className="awards-box">
          <img src={award.image} alt="Trophy" className="awards-image" />
          <h3 className="awards-text">{award.title}</h3>
        </div>
      ))}
    </div>
    
    

    <div className="mission-vision-container">
      <h2 className="title">Our Mission & Vision</h2>
      <div className="circle">
        <div className="half-section top-section">
          <h3 className="section-tittle mission-title">Mission</h3>
          <p className="section-subtitle">Fresh Bites, Zero Fights!</p>
          <p className="section-text">
            "Say goodbye to boring food and kitchen struggles! We serve fresh, 
            homely thalis that taste just like maa ke haath ka khaana – minus the drama."
          </p>
        </div>
        <div className="divider"></div>
        <div className="half-section bottom-section">
          <h3 className="section-tittle vision-title">Vision</h3>
          <p className="section-subtitle">No More “Aaj Khaane Mein Kya Hai?”</p>
          <p className="section-text">
            "We're on a mission to make tasty, home-style meals the easiest choice ever – 
            fresh, fast, and delivered with love!"
          </p>
        </div>
      </div>
    </div>

    <div className="hungerbox-containerr">

      <div className="hungerbox-contentt">
      <h2 className="title">Meal Roedmap</h2>

        <img src={img13} alt="Hunger Box" className="hungerbox-imagee" />
        <h2 className="hungerbox-titlee">The HungerBox</h2>
        <p className="hungerbox-descriptionn">
          Biteup is your go-to food delivery buddy, serving fresh, homestyle meals 
          that taste just like maa ke haath ka khaana—perfect for college students 
          and busy professionals.
        </p>
        <button className="hungerbox-buttonn">Lets Go</button>
        
      </div>

    </div>

    <div className="special-container">
      <h2 className="special-title">
        What’s so Special? <span role="img" aria-label="thinking">🤔</span>
      </h2>

      <div className="special-grid">
        <div className="special-item">
          <span className="special-number">1</span>
          <img src={img14} alt="Fresh Ingredients" className="special-image" />
          <p className="special-text">Fresh Ingredients, Guaranteed Quality</p>
        </div>

        <div className="special-item">
          <span className="special-number">2</span>
          <img src={img15} alt="Homestyle Cooking" className="special-image" />
          <p className="special-text">Homestyle Cooking, Just Like Maa’s Kitchen</p>
        </div>

        <div className="special-item">
          <span className="special-number">3</span>
          <img src={img16} alt="Hygiene First" className="special-image" />
          <p className="special-text">Hygiene First, Food You Can Trust</p>
        </div>

        <div className="special-item">
          <span className="special-number">4</span>
          <img src={img17} alt="Balanced Meals" className="special-image" />
          <p className="special-text">Balanced Wholesome Meals</p>
        </div>

        
      </div>
      <div className="special-item large">
          <span className="special-number large-number">5</span>
          <img src={img18} alt="Fast Delivery" className="special-image" />
          {/* <p className="special-text">Fast & Fresh Delivery</p> */}
        </div>          <p className="special-textt">Fast & Fresh Delivery</p>

        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

    </div>

    <div className="awards-container">
      <h2 className="awards-title">
        Awards Received <span role="img" aria-label="lightning">⚡</span>
      </h2>

      <div className="awards-grid">
        <div className="award-item">
          <img src={img19} alt="Fast Delivery Award" className="award-image" />
          <p className="award-text">Fast & Foodious Delivery Award</p>
        </div>

        <div className="award-item-highlight">
          <img src={img19bg} alt="Thali Heart Award" className="award-image" /><br></br>
          <p className="award-text">The Thali That Stole <br></br>
          Your Heart Award</p>
        </div>

        <div className="award-item">
          <img src={img19} alt="Maa Ke Haath Ka Award" className="award-image" />
          <p className="award-text">Maa Ke Haath Ka Toughest Competitor</p>
        </div>
      </div>
    </div>

    <div className="mission-vision-container">
      <h2 className="title">Our Mission & Vision</h2>
      <div className="circle">
        <div className="half-section top-section">
          <h3 className="section-tittle mission-title">Mission</h3>
          <p className="section-subtitle">Fresh Bites, Zero Fights!</p>
          <p className="section-text">
            "Say goodbye to boring food and kitchen struggles! We serve fresh, 
            homely thalis that taste just like maa ke haath ka khaana – minus the drama."
          </p>
        </div>
        <div className="divider"></div>
        <div className="half-section bottom-section">
          <h3 className="section-tittle vision-title">Vision</h3>
          <p className="section-subtitle">No More “Aaj Khaane Mein Kya Hai?”</p>
          <p className="section-text">
            "We're on a mission to make tasty, home-style meals the easiest choice ever – 
            fresh, fast, and delivered with love!"
          </p>
        </div>
      </div>
    </div>
    <h2 className="founderss-title">
        <strong>Founders</strong>, you can <span className="highlight">trust!😊</span> 
      </h2>
    <div className="founders-container">
      

      <div className="founders-grid">
        {founders.map((founder, index) => (
          <div key={index} className="founder-card">
            <img src={founder.image} alt={founder.name} className="founder-image" />
            <p className="founder-name">{founder.name}</p>
            <p className="founder-role">{founder.role}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="roadmap-container">
      <h2 className="roadmap-title">
        Meal <span className="highlight">Roadmap</span> <span className="flag">🏴</span>
      </h2>

      <div className="roadmap">
        {/* Left Side */}
        <div className="roadmap-left">
          <div className="roadmap-item">
          <div className="roadmap-line-horizontal"></div>
            <p><strong>Fresh Ingredients,</strong><br /> Guaranteed Quality</p>
            <div className="roadmap-circle">
              <img src={img20} alt="Fresh Ingredients" />
            </div>
            
          </div>

          <div className="roadmap-item">
          <div className="roadmap-line-horizontal"></div>
            <p><strong>Hygiene First</strong> –<br /> Food You Can Trust</p>
            <div className="roadmap-circle">
              <img src={img21} alt="Fresh Ingredients" />
            </div>
          </div>

          <div className="roadmap-item">
          <div className="roadmap-line-horizontal"></div>
            <p><strong>Fast & Fresh Delivery</strong></p>
            <div className="roadmap-circle">
              <img src={img22} alt="Fast & Fresh Delivery" />
            </div>
            
          </div>
        </div>

        {/* Middle Vertical Line */}
        <div className="roadmap-line-vertical"></div>

        {/* Right Side */}
        <div className="roadmap-right">
          <div className="roadmap-item">
            <div className="roadmap-line-horizontal"></div>
            <p><strong>Homestyle Cooking</strong> –<br /> Just Like Maa’s Kitchen</p>
            <div className="roadmap-circle">
              <img src={img23} alt="Homestyle Cooking" />
            </div>
          </div>

          <div className="roadmap-item">
            <div className="roadmap-line-horizontal"></div>
            <p><strong>Balanced,</strong><br /> Wholesome Meals</p>
            <div className="roadmap-circle">
              <img src={img20} alt="Balanced Meals" />
            </div>
          </div>
        </div>
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

export default Home;

