import React from 'react';
import styled from 'styled-components';
import '../responsives.css';

const ProjectsSection = styled.section`
  padding: 50px 20px;
  color: #f0f;
  text-align: center;
  background-color: #121212;
  transition: transform 0.5s ease;

  h2 {
    font-size: 2.5em;
    color: #0ff;
    text-shadow: 0 0 10px #0ff;
  }

  p {
    font-size: 1.2em;
    max-width: 800px;
    margin: 20px auto;
    color: #f0f;
  }
`;

const Projects = () => {
  return (
    <ProjectsSection>
      <h2>Proyectos</h2>
      <div className="father-box" style={{ maxWidth: "1200px" }}>
        <div className="child-sm-box">
          <p>
            A lo largo de mi formación universitaria, he tenido la oportunidad de participar en varios proyectos académicos que me han permitido aplicar los conocimientos adquiridos en mis estudios. Estos proyectos me han ayudado a desarrollar habilidades prácticas en áreas como programación, desarrollo web y análisis de sistemas. Aunque no he trabajado en proyectos profesionales, cada uno de estos desafíos ha sido una valiosa experiencia en la que pude aprender a resolver problemas técnicos y a trabajar de manera colaborativa con mis compañeros. Estos proyectos han reforzado mi pasión por la tecnología y me han impulsado a seguir profundizando en el mundo del desarrollo.
          </p>
        </div>
        <div className="child-sm-box">
          <p>
            Mi enfoque en la universidad ha sido no solo entender la teoría detrás de los conceptos tecnológicos, sino también ser capaz de aplicarlos en situaciones reales. He aprendido a desarrollar soluciones utilizando diversas herramientas y lenguajes de programación, así como a optimizar el rendimiento de las aplicaciones. Cada proyecto ha sido una oportunidad para mejorar mis habilidades técnicas y, a la vez, ha fortalecido mi capacidad de trabajo en equipo y mi compromiso con la calidad en el desarrollo de software. Aunque todavía estoy en el proceso de adquirir más experiencia práctica, me siento motivado a seguir aprendiendo y enfrentando nuevos retos en el ámbito del desarrollo.
          </p>
        </div>
      </div>
    </ProjectsSection>
  );
};

export default Projects;