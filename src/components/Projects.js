import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Projects.css';
import instaverse from '../Assets/images/Projects/instaverse.png';
import WorkoutTracker from '../Assets/images/Projects/workout-tracker.png';
import ghFinder from '../Assets/images/Projects/ghFinder.png';
import haggle from '../Assets/images/Projects/haggle.png';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const projectDetails = {
    'instaverse': { image: instaverse },
    'Workout-Tracker': { image: WorkoutTracker },
    'gh-finder': { image: ghFinder },
    'ProjectThreeHaggle': {
        image: haggle,
        description: 'Haggle is a React-based web app that enables users to trade goods and services without currency, featuring user authentication and in-app messaging. Built with a Node.js and Express backend, it uses MongoDB for data storage. Developed collaboratively, the project integrates real-time communication for seamless user interactions.'
    }
};

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const [myRepos, otherRepos] = await Promise.all([
                    axios.get("https://api.github.com/users/Kblack4290/repos"),
                    axios.get("https://api.github.com/users/domrafiti/repos")
                ]);
                const combinedRepos = [...myRepos.data, ...otherRepos.data];
                console.log(combinedRepos);
                const filteredProjects = combinedRepos.filter(project =>
                    Object.keys(projectDetails).includes(project.name)
                );

                setProjects(filteredProjects);
            } catch (error) {
                console.error("Error fetching repos:", error);
            }
        };

        fetchRepos();
    }, []);

    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="projects-list">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <img src={projectDetails[project.name].image} alt={project.name} className="project-image" />
                        <div className="project-details">
                            <h3>{project.name}</h3>
                            <p>{project.description || projectDetails[project.name].description}</p>
                            <div className="project-links">
                                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                                    <FaGithub /> GitHub
                                </a>
                                {project.homepage && (
                                    <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                                        <FaGlobe /> Live App
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;