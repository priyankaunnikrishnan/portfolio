import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import styles from './App.module.css'
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Services } from "./components/Services/Services";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className={styles.App}>
        
        <Navbar />

      <Routes>
 
 <Route exact path="/" element={<Home />} />
 <Route exact path="/about" element={<About />} />
 <Route exact path="/projects" element={<Projects />} />
 <Route exact path="/services" element={<Services />} />
 <Route exact path="/contact" element={<Contact />} />
  
  </Routes>  
      

    
    
      
  
    </div>
    </Router>


  );
}

export default App
