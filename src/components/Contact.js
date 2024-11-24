import React, { useState } from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = styled.section`
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

  form {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input, textarea {
    padding: 10px;
    font-size: 1em;
    color: #0ff;
    background-color: #2a2a2a;
    border: 2px solid #0ff;
    border-radius: 5px;
  }

  button {
    padding: 10px;
    font-size: 1em;
    color: #1a1a1a;
    background-color: #f0f;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const SocialIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;

  a {
    color: #0ff;
    font-size: 1.5em;
    transition: color 0.3s;

    &:hover {
      color: #f0f;
    }
  }
`;

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por tu mensaje!');
    setMessage('');
  };

  return (
    <ContactSection>
      <h2>Contáctame</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre"
          required
        />
        <textarea
          placeholder="Escribe tu mensaje aquí"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
      <SocialIcons>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </SocialIcons>
    </ContactSection>
  );
};

export default Contact;