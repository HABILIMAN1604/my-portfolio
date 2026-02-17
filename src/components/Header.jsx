import React, { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "Skills",
    "Projects",
    "Educations",
    "Beyond Tech",
    "Contact"
  ];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "Home";

      navItems.forEach((item) => {
        const sectionId = item.toLowerCase().replace(/\s+/g, "");
        const section = document.getElementById(sectionId);

        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = item;
          }
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <button
          className={`hamburger${isOpen ? " open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav${isOpen ? " nav-open" : ""}`}>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  className={active === item ? "active" : ""}
                  onClick={() => { setActive(item); setIsOpen(false); }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
