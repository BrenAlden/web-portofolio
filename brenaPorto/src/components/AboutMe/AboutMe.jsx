import styled from 'styled-components';
import TextType from './AMComponents/TextType.jsx';
import {MdLocationOn } from 'react-icons/md';
const AboutSection = styled.div`
  padding: 0 20px; 
  margin: 0;

  @media (max-width: 768px) {
    padding: 0 20px; 
  }
`;

const Title = styled.h2`
  color: #00ffff;
  font-size: 2rem;
  margin-top: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem; 
    margin-bottom: 15px;
  }
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; 
  color: #aaa; 
  font-size: 0.9rem;
  margin-top: 5px; 
`;

const Description = styled.p`
  color: #e0e0e0;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 0.9rem; 
    margin-bottom: 10px;
  }
`;

function AboutMe() {
  return (
    <AboutSection id="about">
      <Title>
        <TextType 
          text={["Welcome!", "My name is Bren Alden!"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          loop={false}
        />
      </Title>
      <LocationInfo>
        <MdLocationOn color="#00ffff" /> 
        <span>Based in Tangerang, Indonesia</span>
      </LocationInfo>

      <Description>
        I'm a Computer Science student at Bina Nusantara University, Alam Sutera campus, with a 
        specialization in Intelligence Systems. My coursework has provided me with a strong foundation 
        in a variety of key areas, including Machine Learning, Deep Learning, Natural Language Processing, 
        and Speech Recognition. My goal is to use this knowledge to solve complex problems and contribute 
        to innovative technological advancements.
      </Description>
      <Description style={{ marginBottom: '0' }}>
        Beyond my core studies, I have a keen interest in data analysis and am actively developing my skills
        in web development. I am a highly motivated and adaptable individual who is always eager to learn new things. 
        I am passionate about expanding my expertise in the tech industry and leveraging my skills to create 
        meaningful and impactful solutions.
      </Description>
    </AboutSection>
  );
}

export default AboutMe;