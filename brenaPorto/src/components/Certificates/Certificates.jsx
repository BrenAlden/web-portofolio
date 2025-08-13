import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { supabase } from '../../supabaseClient.js';
import Masonry from 'react-masonry-css';
import './Certificates.css';

const CertificatesContainer = styled.div`
  color: #fff;
  padding: 30px 40px;
  @media (max-width: 768px) {
    padding: 1px 30px; 
  }
`;

const MainTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const CategoryButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0 30px 15px 30px; 
    margin: 0 -30px 20px -30px; 
    gap: 10px;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const CategoryButton = styled.button`
  background-color: transparent;
  color: #aaa;
  border: 1px solid #444;
  padding: 10px 20px;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  white-space: nowrap;
  
  &.active, &:hover {
    align-items: center;
    background-color: #00ffff;
    color: #1a1a1a;
    border-color: #00ffff;
  }
`;

const CertificateInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: 2;
`;

const CertificateImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease-in-out;
  z-index: 1;
`;

const CertificateCard = styled.a`
  position: relative;
  display: block;
  text-decoration: none;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  
  &:hover ${CertificateInfo} {
    opacity: 1;
  }
  
  &:hover ${CertificateImage} {
    transform: scale(1.05);
  }
`;

const CertificateTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 5px 0;
  color: #00ffff;
  transform: translateY(10px);
  transition: transform 0.3s 0.1s ease;

  ${CertificateCard}:hover & {
    transform: translateY(0);
  }

  @media (max-width: 768px) { font-size: 1.2rem; }
`;

const CertificateSource = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin: 0 0 10px 0;
  transform: translateY(10px);
  transition: transform 0.3s 0.2s ease;

  ${CertificateCard}:hover & {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) { font-size: 0.9rem; }
`;

const CertificateDescription = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin: 0 0 15px 0;
  flex-grow: 0;
  max-width: 90%;
  transform: translateY(10px);
  transition: transform 0.3s 0.3s ease;

  ${CertificateCard}:hover & {
    transform: translateY(0);
  }
`;

const CertificateFooter = styled.div`
  font-size: 0.8rem;
  color: #888;
  margin-top: auto; /* Mendorong ke bawah dalam flex container */
  /* Hapus position: absolute */
  transform: translateY(10px);
  transition: transform 0.3s 0.4s ease;

  ${CertificateCard}:hover & {
    transform: translateY(0);
  }
`;

function Certificates() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCertificates() {
      const { data, error } = await supabase.from('certificate').select('*').order('id', { ascending: false });
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setCertificates(data);
      }
      setLoading(false);
    }
    getCertificates();
  }, []);

  const filteredCertificates = certificates.filter(cert =>
    activeCategory === 'All' || cert.category === activeCategory
  );
  
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
    500: 1
  };
  
  if (loading) {
    return <CertificatesContainer><MainTitle>Loading Certificates...</MainTitle></CertificatesContainer>;
  }

  return (
    <CertificatesContainer>
      <CategoryButtons>
        <CategoryButton className={activeCategory === 'All' ? 'active' : ''} onClick={() => setActiveCategory('All')}>All</CategoryButton>
        <CategoryButton className={activeCategory === 'Technology' ? 'active' : ''} onClick={() => setActiveCategory('Technology')}>Technology</CategoryButton>
        <CategoryButton className={activeCategory === 'Social' ? 'active' : ''} onClick={() => setActiveCategory('Social')}>Social</CategoryButton>
      </CategoryButtons>
      
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredCertificates.map((cert) => (
          <CertificateCard key={cert.id} href={cert.link_source} target="_blank" rel="noopener noreferrer">
            <CertificateImage src={cert.certificate_img} alt={cert.certificate_name} />
            <CertificateInfo>
              <CertificateTitle>{cert.certificate_name}</CertificateTitle>
              <CertificateSource>{cert.source}</CertificateSource>
              <CertificateDescription>{cert.certificate_description}</CertificateDescription>
              <CertificateFooter>Year: {cert.certificate_year}</CertificateFooter>
            </CertificateInfo>
          </CertificateCard>
        ))}
      </Masonry>
    </CertificatesContainer>
  );
}

export default Certificates;