import React, { useState, useEffect } from 'react';
import '../styles/NavBar.css';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsScrolled(offset > window.innerHeight - 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="#hero">Keith Black</a>
                </div>
                <ul className="navbar-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="navbar-social">
                    <a href="https://github.com/Kblack4290" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/kblack4290" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="/path/to/resume.pdf" download target="_blank" rel="noopener noreferrer"><FaFileDownload /></a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;