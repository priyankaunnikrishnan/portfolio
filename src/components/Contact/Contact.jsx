/*Contact.jsx
Student Name: Priyanka Prasanna Kumari
Student ID:301377064 
Date : 01/28/24
*/ 


import React, { useState } from 'react';
import styles from "./Contact.module.css";

//import "./Contact.module.css";

export const Contact = () => {
    
 const handleSubmit = () => {window.location.href ='src/components/Hero'};
  

  return (
   
    <section id='contact'>
       <div className={styles.formdiv}>

       
    <h2 className={styles.title}>Contact</h2>
    <form className={styles.form}>
      <div>
        <label className={styles.label} htmlFor="name">FirstName :</label>
        <input className={styles.input} type="text" id="fname" name="name" required />
      </div>
      <div>
        <label className={styles.label} htmlFor="name">LastName :</label>
        <input className={styles.input} type="text" id="lname" name="name" required />
      </div>
      <div >
        <label className={styles.label} htmlFor="email">Email :  </label>
        <input className={styles.email} type="email" id="email" name="email" required />
      </div>
      <div>
        <label className={styles.label} htmlFor="message">Message :</label>
        <textarea className={styles.textarea}  id="message" name="message" rows="4" required></textarea>
      </div>
      <button type="submit" className={styles.button} onClick={handleSubmit}>Submit</button>
    </form>
    </div>
  <div className= {styles.container}>
    <p>Contact No: 4373664505</p>
    <p>mail id : priyankaunnikrishnan96@gmail.com</p>
    </div>
  </section>
  
     );   
};

