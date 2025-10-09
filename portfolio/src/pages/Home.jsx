import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <h1>Hi, I'm Jared ⚔️ @The Backend Nightmare 🤺</h1>
      <p>A passionate Code Warrior crafting clean & powerful web experiences.</p>

      {/* Skills Section */}
      <h2 className="skills-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {/* Frontend */}
        <div className="card">
          <h3>Frontend</h3>
          <ul>
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML5" /> HTML5
            </li>
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS3" /> CSS3
            </li>
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" /> JavaScript (ES6+)
            </li>
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React.js" /> React.js
            </li>
            <li>
              <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular" /> Angular
            </li>
          </ul>
        </div>

        {/* Backend */}
        <div className="card">
          <h3>Backend</h3>
          <ul>
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python" /> Python
            </li>
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="Flask" /> Flask
            </li>
            <li>
              <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js" /> Node.js
            </li>
            <li>
              <img src="https://expressjs.com/images/express-facebook-share.png" alt="Express.js" /> Express.js
            </li>
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/2772/2772128.png" alt="SQL" /> SQL (PostgreSQL, MySQL)
            </li>
          </ul>
        </div>

        {/* Frameworks & Libraries */}
        <div className="card">
          <h3>Frameworks & Libraries</h3>
          <ul>
            <li>
              <img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" alt="Tailwind" /> Tailwind CSS
            </li>
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="Bootstrap" /> Bootstrap
            </li>
            <li>
              <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="Redux" /> Redux
            </li>
            <li>
              <img src="https://www.sqlalchemy.org/img/sqla_logo.png" alt="SQLAlchemy" /> SQLAlchemy
            </li>
          </ul>
        </div>

        {/* Tools & Cloud */}
        <div className="card">
          <h3>Tools & Cloud</h3>
          <ul>
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111288.png" alt="GitHub" /> Git & GitHub
            </li>
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/919/919853.png" alt="Docker" /> Docker
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM Cloud" /> IBM Cloud
            </li>
            <li>
              <img src="https://cdn.iconscout.com/icon/free/png-512/free-vercel-3628973-3030170.png" alt="Vercel" /> Vercel
            </li>
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/518/518713.png" alt="Linux" /> Linux
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
