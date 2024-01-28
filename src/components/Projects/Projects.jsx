/* Project.jsx
Student Name: Priyanka Prasanna Kumari
Student ID:301377064 
Date : 01/28/24
*/ 
import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

/* function to call the project content so that page will scroll down to project section*/ 

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
