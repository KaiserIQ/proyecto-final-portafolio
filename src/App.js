import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Main from './pages/main/Main';




import React, { useEffect } from 'react';
import styled from 'styled-components';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const AppContainer = styled.div`
  background-color: #000;
  font-family: Arial, sans-serif;
`;

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          section.style.transform = 'scale(1.1)';
        } else {
          section.style.transform = 'scale(1)';
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppContainer>
      <About />
      <Projects />
      <Contact />
    </AppContainer>
  );
};

export default App;