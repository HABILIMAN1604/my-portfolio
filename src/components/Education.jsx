import React, { useRef } from 'react';
import "./Education.css";

export default function Education() {

    const educations = [
        {
            year: "Oct 2022 - Present",
            title: "Bachelor of Computer Science (Software Development) with Honors",
            institution: "Universiti Sultan Zainal Abidin (UniSZA)",
            result: "Current CGPA: 3.78",
            muet: null,
            achievements: [
                "Dean's Award Sem I 2022/2023 (GPA: 3.53)",
                "Dean's Award Sem II 2022/2023 (GPA: 3.85)",
                "Dean's Award Sem I 2023/2024 (GPA: 3.73)",
                "Dean's Award Sem II 2023/2024 (GPA: 3.91)",
                "Dean's Award Sem I 2024/2025 (GPA: 3.79)",
                "Dean's Award Sem II 2024/2025 (GPA: 3.88)"
            ],
            coursework: "OOP, Web Application Development, System Analysis & Design, Database, Software Project Management, Data Structure & Algorithms, Requirement Engineering, Software Testing & Analysis, AI, ANN, Software Workshop",
            finalProject: "Strength Training Mobile Application: Program Recommendation and Workout Tracking using Cosine Similarity"
        },
        {
            year: "May 2020 - Mar 2022",
            title: "Matriculation KPM Certification (Module III: Biology and Computer Science)",
            institution: "Kolej Matrikulasi Pulau Pinang (KMPP)",
            result: "CGPA: 3.53",
            muet: "Band 5",
            achievements: [],
            coursework: "Mathematics, Computer Science, English",
            finalProject: null
        }
    ];

    // Refs for all cards
    const cardRefs = useRef([]);

    // Tilt effect when mouse moves over card
    const handleMouseMove = (e, index) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // mouse X inside card
        const y = e.clientY - rect.top;  // mouse Y inside card
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 5; // max 5 deg
        const rotateY = ((x - centerX) / centerX) * -5;

        card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    // Reset tilt on mouse leave
    const resetCardTransform = (index) => {
        const card = cardRefs.current[index];
        if (!card) return;
        card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    return (
        <section className="educations" id="educations">
            <div className="container page-title">
                <h1>Education Timeline</h1>
            </div>

            <div className="container timeline-container">
                {educations.map((edu, index) => (
                    <div
                        key={index}
                        className={`timeline-card ${index % 2 === 0 ? 'left' : 'right'}`}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => resetCardTransform(index)}
                        ref={el => cardRefs.current[index] = el}
                    >
                        <div className="card-content">
                            <div className="education-summary">
                                <h4>{edu.title}</h4>
                                <p><strong>Institution:</strong> {edu.institution}</p>
                                {edu.result && <p><strong>Result:</strong> {edu.result}</p>}
                                {edu.muet && <p><strong>MUET:</strong> {edu.muet}</p>}
                                {edu.coursework && <p><strong>Coursework:</strong> {edu.coursework}</p>}
                                {edu.finalProject && <p><strong>Final Year Project:</strong> {edu.finalProject}</p>}
                                {edu.achievements.length > 0 && (
                                    <p><strong>Achievements:</strong> {edu.achievements.join(", ")}</p>
                                )}
                            </div>
                            <div className="education-year">
                                <h3>{edu.year}</h3>
                            </div>
                        </div>
                        <div className="timeline-dot"></div>
                    </div>
                ))}
            </div>
        </section>
    )
}
