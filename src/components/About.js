import '../styles/About.css';
import profilePic from '../Assets/images/HolidayParty.jpg';
import unionStation from '../Assets/images/unionstation.jpg';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaFileDownload } from 'react-icons/fa';
import resume from '../Assets/documents/KB_Dev_Resume.pdf';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-card">
                <div className="background-pic" style={{ backgroundImage: `url(${unionStation})` }}>
                    <div className="profile-pic" style={{ backgroundImage: `url(${profilePic})` }}></div>
                </div>
                <div className="about-details">
                    <h3>Keith Black</h3>
                    <p>Software Engineer</p>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/kblack4290/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a></li>
                        <li><a href="https://github.com/Kblack4290" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a></li>
                        <li><a href="mailto:keithblack4290@gmail.com"><FaEnvelope /> keithblack4290@gmail.com</a></li>
                        <li><a href="tel:+18456259783"><FaPhone /> (845) 625-9783</a></li>
                        <li><a href={resume} download><FaFileDownload />Resume</a></li>
                    </ul>
                </div>
            </div>
            <div className="about-content">
                <h2>About Me</h2>
                <p>
                    A passionate fullstack software engineer based in the beautiful city of Denver, Colorado. With a strong background in JavaScript, React, Angular, and C#, I love tackling new challenges and staying up-to-date with the latest technologies.
                </p>
                <p>
                    When I'm not coding, you can find me on the golf course, diving into a good book, or exploring the great outdoors. Denver's stunning landscapes provide the perfect backdrop for my adventures. Let's connect and create something amazing together!
                </p>
            </div>
        </section>
    );
};

export default About;