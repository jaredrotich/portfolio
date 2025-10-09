import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projectData = [
  {
    name: "SkillBridge",
    link: "https://skillbridge-e3aa.vercel.app/",
    description: "It's a skill exchange and marketplace platform",
    tech: ["React", "Vite", "CSS"],
  },
  {
    name: "AI Analyser",
    link: "https://analysis-cli-engine.vercel.app/",
    description: "An AI powered Jackpot Predictor that takes initial and updated odds to predict",
    tech: ["React", "Vite", "AI"],
  },
  {
    name: "Bots Bottler",
    link: "https://bots-bottler.vercel.app/",
    description: "It's a fun app to manage bots Army",
    tech: ["React", "Vite", "CSS"],
  },
  {
    name: "Expense Tracker",
    link: "https://react-code-challenge-1-4nco-git-main-jared-rotichs-projects.vercel.app/",
    description: "An app whereby clients can confidentially account for their Expenses",
    tech: ["React", "Vite", "CSS"],
  },
  {
    name: "Event Planner",
    link: "https://event-planner-app-rpaz.vercel.app/",
    description: "A clean site used to document plans and fit busy schedules",
    tech: ["React", "Vite", "CSS"],
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h1>My Projects</h1>
      <p>Here are some cool things I've built.</p>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            
            <iframe
              className="project-iframe"
              src={project.link}
              title={project.name}
            ></iframe>

            <div className="project-content">
              <h2>{project.name}</h2>
              <p>{project.description}</p>

              <div className="tech-icons">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                Inspect Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
