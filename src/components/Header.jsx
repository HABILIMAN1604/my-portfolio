import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className=" header-container">
        <nav>
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#educations">Education</a></li>
            <li><a href="#beyondtech">Beyond Techs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
