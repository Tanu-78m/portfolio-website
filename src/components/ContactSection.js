// src/components/ContactSection.js

import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  padding: 3rem 2rem;
  background-color: #f0f4f8;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const ContactText = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`;

const ContactLink = styled.a`
  display: inline-block;
  margin: 0.5rem 1rem;
  padding: 0.75rem 1.5rem;
  color: #ffffff;
  background-color: #1a73e8;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #155bb5;
  }
`;

const ContactSection = () => {
  return (
    <ContactWrapper id="contact">
      <Title>Contact Me</Title>
      <ContactText>
        I'd love to hear from you! Whether you have a question or just want to say hello,
        feel free to reach out.
      </ContactText>
      <ContactLink href="mailto:your-email@example.com">Email Me</ContactLink>
      <ContactLink href="https://www.linkedin.com/in/tanu-chawla-67736a261/" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </ContactLink>
      <ContactLink href="https://github.com/Tanu-78m" target="_blank" rel="noopener noreferrer">
        GitHub
      </ContactLink>
    </ContactWrapper>
  );
};

export default ContactSection;
