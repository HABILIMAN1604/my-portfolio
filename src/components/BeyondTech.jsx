import React, { useRef } from "react";
import "./BeyondTech.css";

// Import images from assets folder
import portraitImg from "../assets/portrait_drawing.jpeg";
import fitnessImg from "../assets/fitness_enthusiast.jpeg";

export default function BeyondTech() {

    const beyondtechs = [
        {
            title: "Portrait Drawing",
            year: "2016-2020",
            image: portraitImg, // Use imported variable
            summary: "I tried my hand at portrait drawing, exploring techniques, shading, and capturing expressions. It taught me patience and attention to detail."
        },
        {
            title: "Fitness Enthusiast",
            year: "2016-present",
            image: fitnessImg, // Use imported variable
            summary: "Passionate about fitness and healthy living, I enjoy staying active, pushing my limits, and learning about nutrition and wellness."
        },
    ];

    const cardRefs = useRef([]);

    const handleMouseMove = (e, index) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 5; // max 5 deg
        const rotateY = ((x - centerX) / centerX) * -5;

        const img = card.querySelector(".beyondtech-image");

        card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        img.style.transform = "scale(1.1)"; 
    };

    const resetCardTransform = (index) => {
        const card = cardRefs.current[index];
        if (!card) return;
        const img = card.querySelector(".beyondtech-image");

        card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
        img.style.transform = "scale(1)";
    };

    return (
        <section className="beyondtech" id="beyondtech">
            <div className="container page-title">
                <h1>Beyond Tech</h1>
            </div>
            <div className="container beyondtech-wrapper">
                {beyondtechs.map((beyondtech, index) => (
                    <div 
                        className="beyondtech-card" 
                        key={index}
                        ref={el => cardRefs.current[index] = el}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => resetCardTransform(index)}
                    >
                        <div 
                            className="beyondtech-image" 
                            /* Updated to use the correct variable */
                            style={{ '--bg-image': `url(${beyondtech.image})` }} 
                        >
                            <img src={beyondtech.image} alt={beyondtech.title}/>
                        </div>
                        
                        <div className="beyondtech-content">
                            <div className="beyondtech-title">
                                <h2>{beyondtech.title}</h2>
                            </div>
                            <div className="beyondtech-year">
                                <h4>{beyondtech.year}</h4>
                            </div>
                            <div className="beyondtech-summary">
                                <p>{beyondtech.summary}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}