
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="footer" style={{ textAlign: 'center', padding: '1rem' }}>
      <div className="social-links" style={{ marginBottom: '0.5rem' }}>
        <a href="https://github.com/jaredrotich" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/jared-rotich-57578334a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:jaredrotich3@gmail.com" aria-label="Email">
          <HiOutlineMail size={30} />
        </a>
        <a href="https://x.com/JaredRotich12" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={30} />
        </a>
      </div>
      <p className="footer-text">© {new Date().getFullYear()} Code Warrior. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
