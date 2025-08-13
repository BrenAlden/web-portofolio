import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import AboutMe from './AboutMe/AboutMe.jsx';
import Interest from './AboutMe/Interest.jsx';
import Resume from './Resume/Resume.jsx';
import Project from './Project/Project.jsx';
import Certificates from './Certificates/Certificates.jsx';
import Contact from './Contact/ContactMe.jsx';

const MainContentContainer = styled.div`
  flex: 1;
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 0 30px 30px 30px;
  
  display: flex;
  flex-direction: column;
  position: relative; 

  @media (max-width: 768px) {
    padding: 0;
    border-radius: 0;
    padding-bottom: 60px;
  }
`;

const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex: 1;


  @media (max-width: 768px) {
    padding: 20px 10px;
    padding-top: 60px;
  }
`;

const pageVariants = {
  initial: { opacity: 0, y: -200 }, 
  in: { opacity: 1, y: 0 },         
  out: { opacity: 0, y: 200 }       
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

function MainContent({ activeSection }) {
  const renderContent = () => {
    switch (activeSection) {
      case 'resume':
        return (
          <ContentWrapper
            key="resume"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Resume />
          </ContentWrapper>
        );
      case 'project':
        return (
          <ContentWrapper
            key="project"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Project />
          </ContentWrapper>
        );
      case 'certificates':
        return (
          <ContentWrapper
            key="certificates"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Certificates />
          </ContentWrapper>
        );
      case 'contact':
        return (
          <ContentWrapper
            key="contact"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Contact />
          </ContentWrapper>
        );
      default:
        return (
          <ContentWrapper
            key="about" 
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <AboutMe />
            <Interest />
          </ContentWrapper>
        );
    }
  };

  return (
    <MainContentContainer>
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
    </MainContentContainer>
  );
}

export default MainContent;