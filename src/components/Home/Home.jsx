/* Hero.jsx
Student Name: Priyanka Prasanna Kumari
Student ID:301377064 
Date : 01/28/24
*/


import React from "react";

import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";

export const Home = () => {
  return (
    <section className={styles.container} id="home">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Priyanka Prasanna Kumari</h1>
        <p className={styles.description}>
        Aspiring AI Technologist, currently advancing my expertise through a postgraduate diploma in Software Engineering Technology AI at Centennial College, with a mission to contribute innovatively to the field of artificial intelligence and emerge as a proficient professional in the realm of AI technology.
        </p>
        
      </div>
      <img
        src={getImageUrl("hero/HeroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};