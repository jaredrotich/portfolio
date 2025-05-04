import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
          <h2>Code Warrior ⚔️</h2>
          <NavLink
          to="/"
          className="nav-link"
          >
            Home
          </NavLink>
          <NavLink
          to="/about"
          className="nav-link"
          >
            About
          </NavLink>
          <NavLink
          to="/contact"
          className="nav-link"
          >
            Contact
          </NavLink>
          <NavLink
          to="/projects"
          className="nav-link"
          >
            Projects
          </NavLink>
        </nav>
    )
}