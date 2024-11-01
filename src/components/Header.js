import React from 'react';
import styled from 'styled-components';
import girlImage from '../assets/images/girlimg.avif'; // Girl illustration

const Nav = styled.nav`
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add shadow for visibility */
  z-index: 1000; /* Ensure it stays on top */
`;


const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
`;

const GirlImage = styled.img`
  width: 50px;
  height: auto;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1.5rem;
  margin-right:10rem;
`;

const NavItem = styled.li`
  a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #1a73e8;
    }
  }
`;

const Header = () => {
    return (
        <Nav>
            <LogoContainer>
                <Logo>My Portfolio</Logo>
                <GirlImage src={girlImage} alt="Girl illustration" />
            </LogoContainer>
            <NavList>
                <NavItem>
                    <a href="#about">About</a>
                </NavItem>
                <NavItem>
                    <a href="#projects">Projects</a>
                </NavItem>
                <NavItem>
                    <a href="#contact">Contact</a>
                </NavItem>
            </NavList>
        </Nav>
    );
};

export default Header;
