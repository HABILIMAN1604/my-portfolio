import React from "react";
import "./Projects.css";

// Import all images from the assets folder
import libSystemImg from "../assets/Automated_Testing_Library_System.png";
import smokingTrackerImg from "../assets/Smoking_Tracker.jpg";
import shoppingComparisonImg from "../assets/shopping-comparison.png";
import ePortfolioImg from "../assets/E_Portfolio.png";
import complaintSystemImg from "../assets/Automated_Testing_on_Complaint_Management_System.png";
import customerPredictionImg from "../assets/customer-prediction.png";
import libraryMgmtImg from "../assets/Library_Management_System.png";
import portfolioImg from "../assets/portfolio.png";

export default function Projects() {

    const projects = [
        {
            title: "Automated Testing Library System",
            image: libSystemImg, // Use the imported variable
            chips: ["Java", "Selenium", "Automation"],
            summary: "Created a comprehensive automated testing suite for a library management system, developed robust Selenium scripts, and identified critical bugs to ensure reliability."
        },
        {
            title: "Smoking Tracker Mobile Application",
            image: smokingTrackerImg,
            chips: ["Flutter", "Dart", "SQLite"],
            summary: "Built a mobile app to track daily cigarette intake and expenditure, with offline data storage, cost estimation, and progress visualization features."
        },
        {
            title: "Shopping Price Comparison",
            image: shoppingComparisonImg,
            chips: ["React", "Python", "FastAPI", "Web Scraping"],
            summary: "Developed a responsive React frontend and a FastAPI backend with automated web scraping to provide real-time price comparisons across e-commerce platforms."
        },
        {
            title: "Portfolio & Student Management Web App",
            image: ePortfolioImg,
            chips: ["PHP", "MySQL", "Figma"],
            summary: "Collaborated in a team of 5 to build an e-portfolio and student management system, designing UI in Figma and implementing the frontend and backend with PHP and MySQL."
        },
        {
            title: "Automated Testing on Complaint Management System",
            image: complaintSystemImg,
            chips: ["Java", "Selenium", "QA"],
            summary: "Led a group of 5 to implement full automated testing for a complaint management system using Selenium and ChromeDriver, ensuring full test coverage."
        },
        {
            title: "Customer Purchase Prediction in E-commerce",
            image: customerPredictionImg,
            chips: ["Python", "Neural Network", "Data Analysis"],
            summary: "Developed a predictive model with Python libraries (pandas, scikit-learn, matplotlib) to forecast purchase likelihood, achieving 86% accuracy."
        },
        {
            title: "Library Management System",
            image: libraryMgmtImg,
            chips: ["HTML", "CSS", "JSP", "MySQL"],
            summary: "Built a fully functional library management website in a team of 5, handling borrowing and returning processes, connecting frontend and backend with JSP and MySQL."
        },
        {
            title: "Personal Portfolio Website",
            image: portfolioImg,
            chips: ["HTML", "CSS", "JavaScript"],
            summary: "Developed an individual personal portfolio website with animations and responsive design, hosted on GitHub Pages with full documentation."
        }
    ];

    return (
        <section className="projects" id="projects">
            <div className="container page-title">
                <h1>Projects</h1>
            </div>
            <div className="container projects-wrapper">
                {projects.map((project, index) => (
                    <React.Fragment key={index}>
                        <div className="project-card">
                            <div className="projects-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            
                            <div className="projects-descrition">
                                <div className="projects-title">
                                    <h2>{project.title}</h2>
                                </div>
                                <div className="projects-summary-chips">
                                    {project.chips.map((chip, i) => (
                                        <span className="chip" key={i}>{chip}</span>
                                    ))}
                                </div>
                                <div className="projects-summary-text">
                                    <p>{project.summary}</p>
                                </div>
                            </div>
                        </div>
                        {index < projects.length - 1 && <hr />}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}