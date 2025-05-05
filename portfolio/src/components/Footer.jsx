import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="mailto:youremail@example.com"
          aria-label="Email"
        >
          <HiOutlineMail size={30} />
        </a>
        <a
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter size={30} />
        </a>
      </div>
      <p className="footer-text">© {new Date().getFullYear()} Code Warrior. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
