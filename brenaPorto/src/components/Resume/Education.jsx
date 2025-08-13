import styled from 'styled-components';
import { FaGraduationCap } from 'react-icons/fa';
import BinusLogo from '../../assets/resume/logobinus.jpeg';
import MWLogo from '../../assets/resume/logomw.jpeg';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid #2e2e2e;
  padding-bottom: 10px;

  svg {
    font-size: 1.8rem;
    color: #00ffff;
  }

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 10px;
    svg { font-size: 1.5rem; }
    h3 { font-size: 1.3rem; }
  }
`;

const Item = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  margin-top: 5px;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const Details = styled.div`
  flex: 1;
`;

const Title = styled.h4`
  margin: 0 0 2px 0;
  font-size: 1.2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const Date = styled.p`
  margin: 4px 0 10px 0;
  font-size: 0.9rem;
  color: #888;
`;

const Description = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #aaa;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

function Education() {
  return (
    <SectionContainer>
      <SectionHeader>
        <FaGraduationCap />
        <h3>Education</h3>
      </SectionHeader>
      <Item>
        <Logo src={BinusLogo} alt="Binus Logo" />
        <Details>
          <Title>Bina Nusantara University</Title>
          <Subtitle>Bachelor of Computer Science</Subtitle>
          <Date>2023 - Present</Date>
          <Description>
            Activity:
              <li>Proficient in the core concepts of Machine Learning, Deep Learning, Natural Language Processing (NLP), and Speech Recognition, with an active interest in developing skills in Computer Vision.</li>
              <li>Actively learning and exploring technologies in Web Development and Data Analysis.</li>
              <li>Participated as a competitor in the International Collegiate Programming Contest (ICPC) at the Regional level.</li>
          </Description>
        </Details>
      </Item>
      <Item>
        <Logo src={MWLogo} alt="Maitreyawira Logo" />
        <Details>
          <Title>SMAS Maitreyawira Batam</Title>
          <Subtitle>Mathematics and Natural Sciences Major</Subtitle>
          <Date>2020 - 2023</Date>
          <Description>
            Activity:
              <li>Developed a strong base in Science and Mathematics, applying these concepts to complex problem-solving and analysis.</li>
              <li>Served as Class President for three consecutive years, demonstrating strong leadership and organizational skills.</li>
              <li>Participated in the KSN-K Matemathics</li>
              <li>Received the Non-Academic Award (2020) in recognition of high engagement and active participation during the pandemic.</li>
          </Description>
        </Details>
      </Item>
    </SectionContainer>
  );
}

export default Education;