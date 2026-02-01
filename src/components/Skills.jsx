import React from "react";
import "./Skills.css";
import { 
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaPhp, FaFigma 
} from "react-icons/fa";
import { SiDotnet } from "react-icons/si";

export default function Skills() {

    const skills = [
        { name: "HTML", icon: <FaHtml5 />, level: 90, color: "#e34f26" },
        { name: "CSS", icon: <FaCss3Alt />, level: 85, color: "#1572b6" },
        { name: "JavaScript", icon: <FaJs />, level: 80, color: "#f7df1e" },
        { name: "React", icon: <FaReact />, level: 75, color: "#61dafb" },
        { name: "Node.js", icon: <FaNodeJs />, level: 65, color: "#339933" },
        { name: "Python", icon: <FaPython />, level: 50, color: "#3776ab" },
        { name: "PHP", icon: <FaPhp />, level: 45, color: "#777bb4" },
        { name: "Figma", icon: <FaFigma />, level: 70, color: "#f24e1e" },
        { name: "ASP.NET", icon: <SiDotnet />, level: 40, color: "#512bd4" },
    ];

    return (
        <section className="skills" id="skills">
            <div className="container page-title">
                <h1>Skills</h1>
            </div>

            <div className="container skill-icons-grid">
                {skills.map((skill, index) => (
                    <div className="skill-item" key={index}>
                        
                        {/* 1. Bar Fill Layer (Goes behind the text) */}
                        <div 
                            className="bar-fill" 
                            style={{ width: `${skill.level}%` }}
                        ></div>

                        {/* 2. Text Content Layer (Goes on top of the bar) */}
                        <div className="skill-content-wrapper">
                            <div className="icon" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}