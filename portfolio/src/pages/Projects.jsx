import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projectData = [
  {
    name: "SkillBridge",
    description: "A skill exchange and marketplace platform.",
    url: "https://skillbridge-e3aa.vercel.app/",
    technologies: ["React", "Tailwind", "Node.js"],
    iframe: true,
  },
  {
    name: "AI Analyser",
    description: "An AI-powered Jackpot Predictor that processes initial and updated odds to forecast outcomes.",
    url: "https://analysis-cli-engine.vercel.app/",
    technologies: ["React", "Python", "Flask"],
    iframe: true,
  },
  {
    name: "Bots Bottler",
    description: "A fun app to manage and enlist bots in your army.",
    url: "https://bots-bottler.vercel.app/",
    technologies: ["React", "CSS", "Framer Motion"],
    iframe: true,
  },
  {
    name: "Expense Tracker",
    description: "A secure app that allows clients to account for their expenses easily.",
    url: "https://react-code-challenge-1-mu.vercel.app/",
    image: "/assets/expense-tracker.png",
    technologies: ["React", "CSS", "JavaScript"],
    iframe: false,
  },
  {
    name: "Event Planner",
    description: "A clean app to plan, organize, and manage events with ease.",
    url: "https://event-planner-app-rpaz.vercel.app/",
    technologies: ["React", "CSS", "Node.js"],
    iframe: true,
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <motion.h1
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Projects
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Innovative builds with functional design & smooth execution.
      </motion.p>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {project.iframe ? (
              <iframe
                src={project.url}
                title={project.name}
                className="project-iframe"
                loading="lazy"
              ></iframe>
            ) : (
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
            )}

            <motion.div
              className="circular-bundle"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h2
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.name}
              </motion.h2>

              <motion.p
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {project.description}
              </motion.p>

              <div className="tech-icons">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="tech-tag"
                    whileHover={{ scale: 1.15 }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
                whileHover={{
                  scale: 1.15,
                  rotate: 8,
                  backgroundColor: "#1f6feb",
                }}
                whileTap={{ scale: 0.9 }}
              >
                Visit Project
              </motion.a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
