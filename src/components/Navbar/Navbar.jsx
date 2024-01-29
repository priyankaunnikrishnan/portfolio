/* Navbar.jsx
Student Name: Priyanka Prasanna Kumari
Student ID:301377064 
Date : 01/28/24
*/
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
return (
<>
  < img src= {getImageUrl("logo/P-logos.jpeg")} alt="logo" width="100px" height="100px"/>
    <nav className={styles.navbar}>
      <a className={styles.title} >
        Portfolio
      </a>
      
    <div className={styles.menu}>

   
    <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/services">Services</Link>| <Link to="/projects">Projects</Link>| <Link to="/contact">Contact</Link>
    </div>
    
  
          
    </nav>
    </>
  );
};