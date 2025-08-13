import styled from 'styled-components';

const Card = styled.div`
  background-color: #242424;
  padding: 20px;
  border-radius: 6px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  background-color: #333;
  padding: 15px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 2rem;
    color: #00ffff;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  color: #f0f0f0;
  margin-bottom: 5px;
  margin-top: 0;
`;

const CardDescription = styled.p`
  color: #aaa;
  font-size: 0.9rem;
  margin: 0;
`;

function ServiceCard({ title, description, icon: Icon }) {
  return (
    <Card>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <Content>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </Content>
    </Card>
  );
}

export default ServiceCard;