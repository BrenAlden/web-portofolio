import styled from 'styled-components';
import { FaUsers } from 'react-icons/fa';
import KMBDLogo from '../../assets/resume/logoKMBD.jpg';

const organizationData = [
  {
    name: 'Keluarga Mahasiswa Buddhis Dhammavaddhana (KMBD)',
    logo: KMBDLogo,
    roles: [
      {
        title: 'Staff of Dhamma and Social Division',
        date: '2024 - Present',
        description: [
          'Project Manager of Malam Keakraban 2025',
          'Active in managing and guiding activists for routine Dhamma class activities',
          'Consistently volunteered for internal and external events.'
        ]
      },
      {
        title: 'Activist of Dhamma and Social Division',
        date: '2024 - Present',
        description: 
          [
          'Served as the Person-in-Charge (PIC) for Dhammaclass, with key responsibilities as a Service Leader, Event & Technical Operator, and Service Assistant (Dayaka).',
          'Actively contributed to social division projects, including managing logistics and supplies for community service events ("Bakti Sosial").',
          'Consistently volunteered for internal and external, such as the PMBxWP event and Kathina Puja ceremony.'
        ]
      }
    ]
  }
];

// Styled Components dengan pendekatan Mobile-First

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #2e2e2e;
  padding-bottom: 10px;

  svg {
    font-size: 1.5rem;
    color: #00ffff;
  }

  h3 {
    margin: 0;
    font-size: 1.3rem;
  }

  @media (min-width: 769px) {
    gap: 15px;
    svg { font-size: 1.8rem; }
    h3 { font-size: 1.5rem; }
  }
`;

const OrgItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 769px) {
    flex-direction: row;
    gap: 20px;
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;

  @media (min-width: 769px) {
    width: 50px;
    height: 50px;
    margin-top: 5px;
  }
`;

const RolesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const OrganizationName = styled.h4`
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #f0f0f0;

  @media (min-width: 769px) {
    font-size: 1.2rem;
  }
`;

const RolesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  border-left: none;
  padding-left: 0;
  margin-left: 0;

  @media (min-width: 769px) {
    gap: 20px;
    border-left: 2px solid #2e2e2e;
    padding-left: 20px;
    margin-left: 6px;
  }
`;

const RoleDetails = styled.div`
  position: static;
  
  @media (min-width: 769px) {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: -27px;
      top: 6px;
      width: 10px;
      height: 10px;
      background-color: #1a1a1a;
      border: 2px solid #444;
      border-radius: 50%;
      z-index: 1;
    }
  }
`;

const RoleTitle = styled.p`
  margin: 0 0 2px 0;
  font-size: 0.95rem;
  font-weight: 500;
  color: #ccc;

  @media (min-width: 769px) {
    font-size: 1rem;
  }
`;

const Date = styled.p`
  margin: 4px 0 10px 0;
  font-size: 0.9rem;
  color: #888;
`;

const Description = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #aaa;

  @media (min-width: 769px) {
    font-size: 0.95rem;
  }
`;

const DescriptionList = styled.ul`
  margin: 0;
  padding-left: 20px;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #aaa;

  @media (min-width: 769px) {
    font-size: 0.95rem;
  }
`;

const ListItem = styled.li`
  &:last-child {
    margin-bottom: 0;
  }
`;


function Organization() {
  return (
    <SectionContainer>
      <SectionHeader>
        <FaUsers />
        <h3>Organization & Experience</h3>
      </SectionHeader>

      {organizationData.map((org, orgIndex) => (
        <OrgItem key={orgIndex}>
          <Logo src={org.logo} alt={`${org.name} Logo`} />
          <RolesContainer>
            <OrganizationName>{org.name}</OrganizationName>
            <RolesList>
              {org.roles.map((role, roleIndex) => (
                <RoleDetails key={roleIndex}>
                  <RoleTitle>{role.title}</RoleTitle>
                  <Date>{role.date}</Date>
                  
                  {Array.isArray(role.description) ? (
                    <DescriptionList>
                      {role.description.map((point, pointIndex) => (
                        <ListItem key={pointIndex}>{point}</ListItem>
                      ))}
                    </DescriptionList>
                  ) : (
                    <Description>{role.description}</Description>
                  )}

                </RoleDetails>
              ))}
            </RolesList>
          </RolesContainer>
        </OrgItem>
      ))}
      
    </SectionContainer>
  );
}

export default Organization;