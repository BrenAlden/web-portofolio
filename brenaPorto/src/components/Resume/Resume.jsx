import styled from 'styled-components';
import Education from './Education.jsx';
import Organization from './Organization.jsx';

const ResumeSection = styled.div`
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 30px;
  color: #f0f0f0;

  @media (max-width: 768px) {
    /* Padding diubah agar sisi kiri-kanan sama dengan halaman awal */
    padding: 1px 30px;
    margin-top: 20px;
  }
`;

const ResumeGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 60px;
  }
`;

function Resume() {
  return (
    <ResumeSection>
      <ResumeGrid>
        <Education />
        <Organization />
      </ResumeGrid>
    </ResumeSection>
  );
}

export default Resume;