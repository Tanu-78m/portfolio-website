import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
`;

const ProjectCard = ({ title, description, image, link }) => {
    return (
        <Card whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
        </Card>
    );
};

export default ProjectCard;
