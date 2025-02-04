import React, { useState, useEffect } from 'react';
import '../styles/NavBar.css';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import resume from '../Assets/documents/KBlack_SE_Resume.pdf';
import kbLogoDark from '../Assets/logos/logo_size.jpg';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsScrolled(offset > window.innerHeight - 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="#hero">
                        <img src={kbLogoDark} alt="Logo" />
                    </a>
                    <a href="#hero" className='name'>Keith Black</a>
                </div>
                <ul className="navbar-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="navbar-social">
                    <a href="https://github.com/Kblack4290" target="_blank" rel="noopener noreferrer" data-tooltip="GitHub"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/kblack4290" target="_blank" rel="noopener noreferrer" data-tooltip="LinkedIn"><FaLinkedin /></a>
                    <a href={resume} download target="_blank" rel="noopener noreferrer" data-tooltip="Download Resume"><FaFileDownload /></a>
                </div>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {menuOpen && (
                <div className="menu">
                    <div className="menu-icons">
                        <a href="https://github.com/Kblack4290" target="_blank" rel="noopener noreferrer" data-tooltip="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/kblack4290" target="_blank" rel="noopener noreferrer" data-tooltip="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href={resume} download target="_blank" rel="noopener noreferrer" data-tooltip="Download Resume">
                            <FaFileDownload />
                        </a>
                    </div>
                    <a href="#about" onClick={toggleMenu}>About</a>
                    <a href="#skills" onClick={toggleMenu}>Skills</a>
                    <a href="#projects" onClick={toggleMenu}>Projects</a>
                    <a href="#contact" onClick={toggleMenu}>Contact</a>
                </div>
            )}
        </nav>
    );
};

export default NavBar;