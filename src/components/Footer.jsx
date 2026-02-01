import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
          <div className="social-links">
            <a href="https://instagram.com/habil__iman" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/habil-iman-652816362/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/HABILIMAN1604" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        <p>&copy; 2025 Habil Iman. All rights reserved.</p>
      </div>

    </footer>
  );
}
