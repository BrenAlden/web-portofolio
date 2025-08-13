import React, { useState, useEffect } from 'react'; 
import { supabase } from '../../supabaseClient.js'; 
import styled, { keyframes } from 'styled-components';
import { FiEye } from 'react-icons/fi';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(-50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const ProjectContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  /* Perbaikan padding di desktop */
  padding: 30px 40px; 

  @media (max-width: 768px) {
    max-width: 80%; 
    padding: 1px 10px; 
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin: 0 0 40px 0;
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
    max-width: 100%;
    overflow-x: hidden;
  }
`;

const ProjectCard = styled.div`
  background-color: #2a2a2a; 
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out, background-color 0.3s ease;
  position: relative;
  width: 100%;

  &:hover {
    transform: translateY(-10px);
    background-color: #3a3a3a; 
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  ${ProjectCard}:hover & {
    transform: scale(1.05);
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    height: 150px;
  }
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
  ${ProjectCard}:hover & {
    opacity: 1;
    pointer-events: auto;
  }
`;

const HoverIcon = styled(FiEye)`
  font-size: 2em;
  color: #fff;
`;

const ProjectInfo = styled.div`
  padding: 15px;
  text-align: center;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 5px 0;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ProjectCategory = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
`;

const ModalContent = styled.div`
  background: #2a2a2a;
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  color: #fff;
  position: relative;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  animation: ${slideIn} 0.5s ease;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    /* Padding dan lebar modal diperkecil */
    padding: 15px; 
    width: 90%;
    max-height: 85vh; /* Batasi tinggi agar tidak terlalu panjang */
    overflow-y: auto; /* Aktifkan scroll jika kontennya panjang */
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #aaa;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: #fff;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-height: 120px; 
  }
`;

const ModalTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 5px;
  color: #00FFFF;

  @media (max-width: 768px) {
    /* Ukuran font judul diperkecil */
    font-size: 1.2rem;
  }
`;

const ProjectDetail = styled.p`
  font-size: 0.9rem;
  margin: 3px 0;
  color: #e0e0e0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ProjectDetailWithGap = styled(ProjectDetail)`
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 5px; 
  }
`;


const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;

  @media (max-width: 768px) {
    gap: 5px; 
    margin-top: 5px;
  }
`;

const SkillItem = styled.li`
  background-color: #00FFFF;
  color: #1a1a1a;
  padding: 4px 8px;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #00cccc;
  }

  @media (max-width: 768px) {
    /* Ukuran font skill diperkecil */
    font-size: 0.65rem;
    padding: 2px 5px;
  }
`;

const ModalLink = styled.a`
  display: inline-block;
  background-color: #5a5a5a;
  color: #e0e0e0;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 20px;
  transition: background-color 0.3s ease;
  font-size: 0.9rem;
  &:hover {
    background-color: #7a7a7a;
  }

  @media (max-width: 768px) {
    /* Ukuran tombol diperkecil */
    padding: 6px 12px;
    font-size: 0.8rem;
    margin-top: 10px;
  }
`;


const Modal = ({ project, onClose }) => {
  if (!project) return null;
  
  // Di sini, pastikan Anda menggunakan nama kolom dari Supabase
  // Contoh: project.project_name, project.image_url, project.description, project.skill, project.project_link
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
        {project.image_url && <ModalImage src={project.image_url} alt={project.project_name} />}
        
        <ModalTitle>{project.project_name}</ModalTitle>
      
        {project.description && <ProjectDetailWithGap as="p">{project.description}</ProjectDetailWithGap>}
        
        {Array.isArray(project.skill) && project.skill.length > 0 && (
          <ProjectDetailWithGap>
            <strong>Skills:</strong>
            <SkillList>
              {project.skill.map((s, index) => (
                <SkillItem key={index}>{s}</SkillItem>
              ))}
            </SkillList>
          </ProjectDetailWithGap>
        )}
        
        {/* Ubah project.link menjadi project.project_link */}
        {project.project_link && (
          <ModalLink href={project.project_link} target="_blank" rel="noopener noreferrer">
            View Project
          </ModalLink>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        if (data) setProjects(data);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  const handleCardClick = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading Projects...</div>;
  }

  return (
    <ProjectContainer>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} onClick={() => handleCardClick(project)}>
            <ProjectImage src={project.image_url} alt={project.project_name} />
            <HoverOverlay>
              <HoverIcon />
            </HoverOverlay>
            <ProjectInfo>
              <ProjectTitle>{project.project_name}</ProjectTitle>
              <ProjectCategory>{project.category.substring(0, 50)}</ProjectCategory>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectGrid>
      <Modal project={selectedProject} onClose={handleCloseModal} />
    </ProjectContainer>
  );
}

export default Project;