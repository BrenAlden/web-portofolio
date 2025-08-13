import styled from 'styled-components';
import { MdAutoAwesome, MdDataThresholding, MdOutlineDesignServices } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';

const CardContainer = styled.div`
  background-color: #1a1a1a;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  text-align: center;
  transition: transform 0.3s ease, background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    background-color: #2a2a2a;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #00FFFF;
  margin-bottom: 10px;
  transition: color 0.3s ease;

  ${CardContainer}:hover & {
    color: #ffffff;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin: 0;
  transition: color 0.3s ease;

  ${CardContainer}:hover & {
    color: #00FFFF;
  }
`;

const ServiceCard = ({ title, icon: Icon }) => {
  return (
    <CardContainer>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};

const InterestSection = styled.div`
  padding: 0 20px; 
  margin: 0; 
`;

const Title = styled.h2`
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
  }
`;

const services = [
  {
    title: 'AI Engineering',
    icon: MdAutoAwesome,
  },
  {
    title: 'Web Development',
    icon: FaCode,
  },
  {
    title: 'Data Analysis',
    icon: MdDataThresholding,
  },
  {
    title: 'Web Design',
    icon: MdOutlineDesignServices,
  },
];

function Interest() {
  return (
    <InterestSection>
      <Title>Interest<span style={{color: '#00FFFF'}}>?</span></Title>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </ServicesGrid>
    </InterestSection>
  );
}

export default Interest;