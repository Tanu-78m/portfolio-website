import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  color: #000;
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  margin-top: -3rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0 auto 1rem auto;
  line-height: 1.6;
`;

const Section = styled.div`
  margin-top: 2rem;
  text-align: left;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #ffcd38; /* Highlight color */
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1rem;
`;

const SkillItem = styled.div`
  background-color: #555;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const HeroSection = () => {
    return (
        <HeroWrapper>
            <Title>Welcome to My Portfolio</Title>
            <Subtitle>Explore my qualifications, projects, and get in touch!</Subtitle>
            <Subtitle>
                Hi, I'm <b>Tanu Chawla</b>, a Frontend developer specializing in creating modern,
                responsive, and user-friendly website layouts and applications.
            </Subtitle>

            {/* Personal Bio Section */}
            <Section>
                <SectionTitle>About Me</SectionTitle>
                <Paragraph>
                    I’m a dedicated developer with a passion for building clean, efficient
                    applications. I have a solid foundation in both the technical and creative aspects of development.
                    Looking for an entry into a world-class, highly professional organization where I can
                    use my knowledge base as well as personal attributes to achieve organizational
                    goals. I am positive, adaptive, and eager to learn, with a desire to grow my skills
                    in the field of development.
                </Paragraph>
            </Section>

            {/* Education Section */}
            <Section>
                <SectionTitle>Education</SectionTitle>
                <List>
                    <ListItem><b>Bachelor’s Degree in Computer Application </b>- Maharshi Dayanand University, Rohtak</ListItem>
                    <ListItem><b>Master’s Degree in Computer Application </b>- Maharshi Dayanand University, Rohtak</ListItem>
                </List>
            </Section>

            {/* Skills Section */}
            <Section>
                <SectionTitle>Skills</SectionTitle>
                <SkillsGrid>
                    <SkillItem>JavaScript</SkillItem>
                    <SkillItem>React</SkillItem>
                    <SkillItem>CSS</SkillItem>
                    <SkillItem>HTML</SkillItem>
                    <SkillItem>Java</SkillItem>
                    <SkillItem>Git</SkillItem>
                    <SkillItem>C</SkillItem>
                    <SkillItem>C++</SkillItem>
                </SkillsGrid>
            </Section>

            {/* Strengths Section */}
            <Section>
                <SectionTitle>Strengths</SectionTitle>
                <List>
                    <ListItem>Strong problem-solving skills</ListItem>
                    <ListItem>Excellent communication and teamwork abilities</ListItem>
                    <ListItem>Adaptability and eagerness to learn new technologies</ListItem>
                    <ListItem>Attention to detail and dedication to quality</ListItem>
                    <ListItem>Creative approach to web design and UI development</ListItem>
                    <ListItem>Hardworking & Committed towork</ListItem>
                </List>
            </Section>
        </HeroWrapper>
    );
};

export default HeroSection;
