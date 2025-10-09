import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/jaredrotich"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={28} />
      </a>
      <a
        href="https://www.linkedin.com/feed/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={28} />
      </a>
      <a href="mailto:jaredrotich3@gmail.com">
        <HiOutlineMail size={28} />
      </a>
      <a
        href="https://wa.me/254723467198"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={28} />
      </a>
      <a
        href="https://x.com/JaredRotich12"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={28} />
      </a>
    </div>
  );
}

export default SocialLinks;
