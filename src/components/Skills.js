import React, { useEffect, useRef } from 'react';
import '../styles/Skills.css';
import bootstrapLogo from '../Assets/logos/bootstrap-logo.png';
import cssLogo from '../Assets/logos/css-logo.png';
import expressLogo from '../Assets/logos/Express-logo.png';
import htmlLogo from '../Assets/logos/html-logo.png';
import jsLogo from '../Assets/logos/Js-logo.png';
import jQueryLogo from '../Assets/logos/Jquery-logo.png';
import mongoLogo from '../Assets/logos/mongodb-logo.png';
import mysqlLogo from '../Assets/logos/mysql-logo.png';
import nodeLogo from '../Assets/logos/node-logo.png';
import reactLogo from '../Assets/logos/React-logo.png';
import gitLogo from '../Assets/logos/Git-logo.png';
import githubLogo from '../Assets/logos/Github-logo.png';
import gitlab from '../Assets/logos/Gitlab-logo.png';
import npmLogo from '../Assets/logos/NPM-logo.png';
import materialUILogo from '../Assets/logos/Material-logo.png';
import foundationsLogo from '../Assets/logos/Foundation-logo.png';

const logos = [
    { src: reactLogo, alt: 'React' },
    { src: bootstrapLogo, alt: 'Bootstrap' },
    { src: cssLogo, alt: 'Css' },
    { src: expressLogo, alt: 'Express Js' },
    { src: htmlLogo, alt: 'Html' },
    { src: jsLogo, alt: 'JavaScript' },
    { src: mongoLogo, alt: 'MongoDB' },
    { src: nodeLogo, alt: 'Node Js' },
    { src: gitLogo, alt: 'Git' },
    { src: githubLogo, alt: 'Github' },
    { src: npmLogo, alt: 'NPM' },
    { src: materialUILogo, alt: 'Material UI' },
    { src: foundationsLogo, alt: 'Foundations' },
    { src: mysqlLogo, alt: 'MySQL' },
    { src: jQueryLogo, alt: 'jQuery' },
    { src: gitlab, alt: 'Gitlab' }
];

const Skills = () => {
    const carouselRef = useRef(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        const logosLength = logos.length;
        const totalLogos = logosLength * 2;
        let scrollAmount = 0;
        const scrollStep = 1;
        const scrollInterval = 20;

        const startScrolling = () => {
            intervalRef.current = setInterval(() => {
                scrollAmount += scrollStep;
                if (scrollAmount >= carousel.scrollWidth / 2) {
                    scrollAmount = 0;
                }
                carousel.scrollLeft = scrollAmount;
            }, scrollInterval);
        };

        startScrolling();

        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <section className="skills" id="skills">
            <h2>My Skills</h2>
            <div className="carousel" ref={carouselRef}>
                {[...logos, ...logos].map((logo, index) => (
                    <div className="skill-card" key={index}>
                        <img src={logo.src} alt={logo.alt} />
                        <p>{logo.alt}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;