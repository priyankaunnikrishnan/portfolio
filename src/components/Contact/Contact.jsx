import React, { useState } from 'react';
import styles from "./Contact.module.css";

//import "./Contact.module.css";

export const Contact = () => {

  return (
    <section id='contact'>
    <div className={styles.container}>
    <h2 className={styles.title}>Contact</h2>
    <form className={styles.form}>
      <div className="form-group">
        <label className={styles.label} htmlFor="name">FirstName :</label>
        <input className={styles.input} type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label className={styles.label} htmlFor="name">LastName :</label>
        <input className={styles.input} type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label className={styles.label} htmlFor="email">Email :  </label>
        <input className={styles.email} type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label className={styles.label} htmlFor="message">Message :</label>
        <textarea className={styles.textarea}  id="message" name="message" rows="4" required></textarea>
      </div>
      <button type="submit" className={styles.button}>Submit</button>
    </form>
  </div>
  </section>
     );
};


