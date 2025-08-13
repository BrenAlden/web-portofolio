import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaGithub, FaWhatsapp, FaTimes, FaLinkedin} from 'react-icons/fa';
import ProfileImage from '../assets/pp2.jpeg';
import { motion } from 'framer-motion';

const SidebarContainer = styled(motion.aside)`
  width: 300px;
  background-color: #1a1a1a;
  color: #e0e0e0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 50px;
  height: calc(100vh - 100px);
  padding: 30px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transform: translateX(${props => (props.isOpen ? '0' : '-100%')});
    transition: transform 0.3s ease-in-out;
    width: 80%;
    max-width: 300px;
    z-index: 1000;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
    border-radius: 0;
    padding: 0;
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 10px;

  @media (max-width: 768px) {
    padding: 60px 30px 0 30px;
  }
`;

const CloseButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    color: #00ffff;
    cursor: pointer;
    font-size: 1.5rem;
    z-index: 1001;
  }
`;

const ProfilePic = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid #333;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const Name = styled.h2`
  margin-bottom: 1px;
  font-size: 1.8rem;
`;

const Title = styled.p`
  color: #aaa;
  margin-bottom: 25px;
  font-size: 0.9rem;
  text-align: center;
`;

const NavMenu = styled(motion.nav)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid #333;
  padding-top: 25px;
  align-items: flex-start;
  flex-grow: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
    width: 93%;
  }
`;

const NavLink = styled(motion.a)`
  text-decoration: none;
  color: #aaa;
  padding: 12px 20px;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  flex-shrink: 0;

  &.active, &:hover {
    background-color: #2c2c2c;
    color: #00ffff;
  }
`;

const FooterContainer = styled.div`
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 30px 20px 30px;
  }
`;

const SocialIcons = styled.div`
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #333;
  
  display: flex; /* Menambahkan flexbox */
  justify-content: center; /* Memusatkan ikon secara horizontal */
  
  a {
    color: #888;
    font-size: 1.3rem;
    margin: 0 12px;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
      color: #00ffff;
    }
  }

  a svg {
    display: block;
  }
`;

const CopyrightText = styled.p`
  text-align: center;
  font-size: 0.8rem;
  color: #555;
  margin: 0;
  padding-top: 15px;
`;

const navItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  active: { x: 10, scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 255, 0.4)" }
};

function Sidebar({ isOpen, onClose, activeSection, setActiveSection }) {
  const handleNavClick = (e, section) => {
    e.preventDefault();
    setActiveSection(section);
    if (onClose) {
      onClose();
    }
  };

  return (
    <SidebarContainer
      isOpen={isOpen}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CloseButton onClick={onClose}>
        <FaTimes />
      </CloseButton>
      
      <ProfileHeader>
        <ProfilePic 
          src={ProfileImage} 
          alt="Bren Alden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <Name>Bren Alden</Name>
        <Title>Computer Science Undergraduate Student</Title>
      </ProfileHeader>

      <NavMenu
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <NavLink 
          className={activeSection === 'about' ? 'active' : ''} 
          onClick={(e) => handleNavClick(e, 'about')}
          variants={navItemVariants}
          animate={activeSection === 'about' ? 'active' : 'visible'}
          whileHover={{ scale: 1.03 }}
        >
          About
        </NavLink>
        <NavLink 
          className={activeSection === 'resume' ? 'active' : ''} 
          onClick={(e) => handleNavClick(e, 'resume')}
          variants={navItemVariants}
          animate={activeSection === 'resume' ? 'active' : 'visible'}
          whileHover={{ scale: 1.03 }}
        >
          Resume
        </NavLink>
        <NavLink 
          className={activeSection === 'project' ? 'active' : ''} 
          onClick={(e) => handleNavClick(e, 'project')}
          variants={navItemVariants}
          animate={activeSection === 'project' ? 'active' : 'visible'}
          whileHover={{ scale: 1.03 }}
        >
          Project
        </NavLink>
        <NavLink 
          className={activeSection === 'certificates' ? 'active' : ''} 
          onClick={(e) => handleNavClick(e, 'certificates')}
          variants={navItemVariants}
          animate={activeSection === 'certificates' ? 'active' : 'visible'}
          whileHover={{ scale: 1.03 }}
        >
          Certificates
        </NavLink>
        <NavLink 
          className={activeSection === 'contact' ? 'active' : ''} 
          onClick={(e) => handleNavClick(e, 'contact')}
          variants={navItemVariants}
          animate={activeSection === 'contact' ? 'active' : 'visible'}
          whileHover={{ scale: 1.03 }}
        >
          Contact
        </NavLink>
      </NavMenu>

      <FooterContainer>
        <SocialIcons>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <motion.div initial={{ y: 0 }} whileHover={{ scale: 1.2, y: -3 }} transition={{ duration: 0.2 }}>
              <FaInstagram />
            </motion.div>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <motion.div initial={{ y: 0 }} whileHover={{ scale: 1.2, y: -3 }} transition={{ duration: 0.2 }}>
              <FaGithub />
            </motion.div>
          </a>
          <a href="https://www.linkedin.com/in/bren-a-494069326/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <motion.div initial={{ y: 0 }} whileHover={{ scale: 1.2, y: -3 }} transition={{ duration: 0.2 }}>
              <FaLinkedin />
            </motion.div>
          </a>
          <a onClick={(e) => handleNavClick(e, 'contact')} aria-label="WhatsApp">
            <motion.div initial={{ y: 0 }} whileHover={{ scale: 1.2, y: -3 }} transition={{ duration: 0.2 }}>
              <FaWhatsapp />
            </motion.div>
          </a>
        </SocialIcons>
        <CopyrightText>© 2025 Bren Alden</CopyrightText>
      </FooterContainer>
    </SidebarContainer>
  );
}

export default Sidebar;