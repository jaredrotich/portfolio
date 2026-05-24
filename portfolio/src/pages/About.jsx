import React from "react";
import "./About.css";

export default function About() {
  return (
    <main className="about-container">
      <div className="about-left">
        <div className="profile-pic">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHC_C8dIT8tRA/profile-displayphoto-scale_400_400/B4DZqMdRpwKQAA-/0/1763293079354?e=1781136000&v=beta&t=xMghlKai2cXaBTjAPAOwtwjrZeNhOyPRie_UHPScEoc"
            alt="Kipyegon Jared"
          />
        </div>
      </div>

     
      <div className="about-right">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <h1 className="name-title">Kipyegon Jared</h1>

          <p>
            Hello! I'm <strong>Kipyegon Jared</strong> — a{" "}
            <strong>Full-Stack Web Developer</strong> and{" "}
            <strong>IT Professional</strong> passionate about building functional and visually
            appealing web applications. I specialize in integrating modern web technologies to
            create data-driven solutions.
          </p>

          <p>
            Proficient in <strong>JavaScript</strong> (React.js, Angular),{" "}
            <strong>Python</strong> (Flask), <strong>SQL</strong>, and cloud technologies. I also
            work with modern frameworks and follow development best practices to ensure clean,
            scalable, and secure code.
          </p>

          <p>
            I'm a certified <strong>IBM Cloud Practitioner</strong> and currently open to exciting
            new opportunities. If you’re looking for someone who can craft elegant code and deliver
            practical solutions — I’m your guy. 🚀
          </p>
        </div>
      </div>
    </main>
  );
}
