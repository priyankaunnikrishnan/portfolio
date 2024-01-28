/* About.jsx
Student Name: Priyanka Prasanna Kumari
Student ID:301377064 
Date : 01/28/24
*/ 

import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Legal Name </h3>
              <p>
              Priyanka Prasanna Kumari
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Intro on me</h3>
              <p>
                I am from India. I have completed my Bachelor degree in Computer Science and Engineering. Worked as an insurance analyst for past 4 years.
                Have only hands on experience in programming.Trying to learn programming again and my goal is to secure a job in software field.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Career Exploration</h3>
              <p>
                I am enthusiastic about the opportunity to apply my skills within a dynamic evironment. 
                If you are in search of a dedicated and proficient software engineering enthusiast, I am eager to connect with you and discuss potential avenues for collaboration.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
            
              <p> 
              <a href="https://drive.google.com/file/d/14ohkxheD9rCfMEKTdDfsaEk7kipi0oZ1/view?usp=drive_link" className={styles.aboutItemText} >
               RESUME
              </a>
              </p>
            </div>
          </li>

        </ul>       
      </div>
                                                       
      
    </section>
  );
};
