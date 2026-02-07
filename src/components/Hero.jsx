import React, { useState, useEffect } from "react"; // Import useState and useEffect
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import habilImage from "../assets/habilimage.jpg";

// List of roles to cycle through
export default function Hero() {
    const roles = ["Software Developer", "Frontend Developer", "Backend Developer", "Software Tester"];

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150); // Initial typing speed

    useEffect(() => {
        const fullText = roles[currentRoleIndex];
        let timer;

        const handleTyping = () => {
            if (isDeleting) {
                setDisplayedText(prev => fullText.substring(0, prev.length - 1));
                setTypingSpeed(75);
            } else {
                setDisplayedText(prev => fullText.substring(0, prev.length + 1));
                setTypingSpeed(150);
            }
        };

        if (!isDeleting && displayedText === fullText) {
            setTypingSpeed(1500); 
            setIsDeleting(true);
        } else if (isDeleting && displayedText === '') {
            setIsDeleting(false);
            setCurrentRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
            setTypingSpeed(500);
        }

        timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentRoleIndex, displayedText, isDeleting, typingSpeed]);

    return (
        <section className="hero" id="home">
            <div className="container hero-wrapper">

                <div className="hero-text">
                    <h1>Hello, I am Habil</h1>
                    
                    <h1 className="typing-animation-text">
                        {displayedText}
                        <span className="cursor">|</span>
                    </h1>
                    
                    <p>Aspiring technology professional with a strong interest in building reliable and user-friendly digital solutions. Passionate about learning new technologies, improving development skills, and turning ideas into real-world applications through clean and efficient code.</p>
                    <div className="social-links">
<a
  href={`${import.meta.env.BASE_URL}resume.pdf`}
  target="_blank"
  rel="noreferrer"
  className="btn"
>
  View Resume
</a>


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
                </div>

                <div className="hero-image">
                    {/* Use public folder path */}
                    <img src={habilImage} alt="Me" />
                </div>

            </div>
        </section>
    );
}
