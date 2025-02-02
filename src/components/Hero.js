import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = 'Fullstack Software Engineer';

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) {
                clearInterval(interval);
            }
        }, 100); // Adjust typing speed here
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero" id="hero">
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1 className="fade-in">Keith Black</h1>
                    <p className="typing">{text}</p>
                    <a href="#contact" className="btn">Get in Touch</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;