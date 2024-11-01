import React from 'react';
import styled from 'styled-components';
import ProjectImage1 from '../assets/images/CrystalImg.png';
import ProjectImage2 from '../assets/images/usermanagement.png';
import ProjectImage3 from '../assets/images/TravelSite.png';
import ProjectImage4 from '../assets/images/CafeManage.png';

const ProjectsWrapper = styled.section`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #000;
  margin-bottom: 1.5rem;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
`;

const ProjectCard = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 1.5rem;
  width: 280px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 0.5rem;
  color: #007bff;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const projectsData = [
    {
        title: "Crystal Shop Site",
        description: "It is a Crystal Shop website where we can buy any type of crystals it is working website.It is created using html css and js.",
        image: ProjectImage1,
        link: "https://vercel.com/api/toolbar/link/crystal-shop-site.vercel.app?via=project-dashboard-alias-list&p=1&page=/"
    },
    {
        title: "User-management app",
        description: "It is used to manage user data Add view add delete option available it is react based.",
        image: ProjectImage2,
        link: "https://vercel.com/api/toolbar/link/user-management-app-khaki.vercel.app?via=deployment-domains-list&p=1&page=/"
    },
    {
        title: "Travel site",
        description: "It is simple html css based travel site.",
        image: ProjectImage3,
        link: "https://vercel.com/api/toolbar/link/travelsiite.vercel.app?via=project-dashboard-alias-list&p=1&page=/"
    },
    {
        title: "Cafe Management System",
        description: "It is fully backend system in this we can manage the cafe system easily can create account also or admin panel also presnt and it is netbeans sql based site.",
        image: ProjectImage4,
        link: "https://github.com/Tanu-78m/Cafe-Management"
    },
    // Add more projects as needed
];

const ProjectsSection = () => {
    return (
        <ProjectsWrapper id="projects">
            <Title>My Projects</Title>
            <ProjectsContainer>
                {projectsData.map((project, index) => (
                    <ProjectCard key={index}>
                        {project.image && <ProjectImage src={project.image} alt={project.title} />}
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <ProjectDescription>{project.description}</ProjectDescription>
                        <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </ProjectLink>
                    </ProjectCard>
                ))}
            </ProjectsContainer>
        </ProjectsWrapper>
    );
};

export default ProjectsSection;
