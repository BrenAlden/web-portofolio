import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar.jsx';
import MainContent from './MainContent.jsx';
import GlobalStyles from '../css/globalcss.jsx';
import { MdChevronRight } from 'react-icons/md';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #121212;
  color: #f0f0f0;
  
  padding: 50px;
  box-sizing: border-box;
  gap: 20px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    gap: 0;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }
`;

const MainContentWrapper = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  overflow-x: hidden;

  @media (max-width: 768px) {
    min-height: 100vh;
    width: 100%;
    padding-left: ${props => (props.isSidebarOpen ? '100%' : '0')};
    transition: padding-left 0.3s ease-in-out;
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 100;
  background-color: transparent;
  color: #00ffff;
  border: none;
  width: 40px;
  height: 40px;
  
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  return (
    <>
      <GlobalStyles />
      <ToggleButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <MdChevronRight size={20} />
      </ToggleButton>
      <AppContainer>
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <MainContentWrapper isSidebarOpen={isSidebarOpen}>
          <MainContent 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
          />
        </MainContentWrapper>
      </AppContainer>
    </>
  );
}

export default App;