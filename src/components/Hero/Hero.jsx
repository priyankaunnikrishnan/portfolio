import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm PRIYANKA PRASANNA KUMARI</h1>
        <p className={styles.description}>
        Aspiring AI Technologist | Advanced PG Diploma Candidate in Software Engineering Technology- Artificial Intelligence | 
        Fast-Track Learner and Innovator
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          RESUME
        </a>
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