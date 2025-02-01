import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div>
      <Hero id="hero" />
      <NavBar />
      <div className="container">
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Contact id="contact" />
      </div>
    </div>
  );
}

export default App;