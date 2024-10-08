import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css/Global.css';
import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail/>} /> {/* Dynamische route */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;