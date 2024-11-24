import React from 'react';
import styled from 'styled-components';
import '../responsives.css';

const AboutSection = styled.section`
  padding: 50px 20px;
  color: #0ff;
  text-align: center;
  background-color: #1a1a1a;
  transition: transform 0.5s ease;

  h2 {
    font-size: 2.5em;
    color: #f0f;
    text-shadow: 0 0 10px #f0f;
  }

  p {
    font-size: 1.2em;
    line-height: 1.5;
    max-width: 800px;
    margin: 20px auto;
    color: #0ff;
    margin-bottom: 20px;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <h2>Acerca de mí</h2>
      <div className="father-box" style={{ maxWidth: "1200px" }}>
        <div className="child-sm-box">
          <p>
            Soy un estudiante universitario enfocado en la carrera de Desarrollo de Software. Desde que inicié mis
            estudios, descubrí una pasión por la tecnología y la creación de soluciones digitales. Me interesa
            especialmente el desarrollo web y cómo las páginas pueden transformarse en herramientas poderosas
            que conectan a las personas y resuelven problemas cotidianos. Estoy en las primeras etapas de
            aprendizaje, y actualmente me dedico a entender los conceptos fundamentales de HTML, CSS y
            JavaScript, así como a explorar el diseño de interfaces de usuario. Considero que la base de
            conocimientos sólidos en esta área es crucial para avanzar en mi carrera.
          </p>
        </div>

        <div className="child-sm-box">
          <p>
            Estudiar y explorar nuevas tecnologías es una parte fundamental de mi vida, y siempre estoy buscando
            maneras de mejorar y desafiarme. Me motiva el potencial de crear aplicaciones que no solo sean
            funcionales, sino que también brinden una experiencia visual y de usuario destacada. Aunque estoy en
            el inicio de mi trayectoria, ya estoy desarrollando proyectos pequeños para mejorar mis habilidades y
            asentar lo que voy aprendiendo en clase. Mi objetivo a largo plazo es profundizar en frameworks y
            herramientas avanzadas como React, con la visión de construir aplicaciones completas y dinámicas en
            el futuro.
          </p>
        </div>
      </div>
    </AboutSection>
  );
};

export default About;