// src/App.js

import React from 'react';
import Header from './components/Header';
import Bio from './components/Bio';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import styled from 'styled-components';
import backgroundImage from './assets/images/portbgimg.jpg';

const BackgroundWrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 2rem 0;
`;

// Adding top padding to the main content to offset the fixed navbar
const MainContent = styled.div`
  padding-top: 80px; /* Adjust to the height of your navbar */
`;

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <BackgroundWrapper>
          <Bio />
          <ProjectSection />
        </BackgroundWrapper>
        <div id="contact">
          <ContactSection />
        </div>
      </MainContent>
    </>
  );
}

export default App;
