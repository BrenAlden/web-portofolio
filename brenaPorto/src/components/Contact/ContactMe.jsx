import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope } from 'react-icons/fa';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;
  
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 30px;
  color: #f0f0f0;

  @media (max-width: 768px) {
    padding: 1px 30px;
    border-radius: 0; 
  }
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #ccc;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  background-color: #2a2a2a;
  border: 1px solid #444;
  border-radius: 4px;
  color: #f0f0f0;
  font-size: 1rem;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00ffff;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  background-color: #2a2a2a;
  border: 1px solid #444;
  border-radius: 4px;
  color: #f0f0f0;
  font-size: 1rem;
  box-sizing: border-box;
  resize: vertical;
  min-height: 150px;
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00ffff;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: #00ffff;
  color: #1a1a1a;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: #5fffff;
  }

  &:disabled {
    background-color: #444;
    cursor: not-allowed;
  }
`;

const FormStatus = styled.p`
  text-align: center;
  font-size: 1rem;
  color: ${props => (props.success ? '#00ffff' : '#ff4d4d')};
`;

function ContactForm() {
  const [status, setStatus] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('Sending...');
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("Message sent, wait for my response!");
        form.reset();
      } else {
        const responseData = await response.json();
        if (Object.hasOwn(responseData, 'errors')) {
          setStatus(responseData["errors"].map(error => error["message"]).join(", "));
        } else {
          setStatus("Oops! There is a problem");
        }
      }
    } catch (error) {
      setStatus("Oops! There is a problem");
    }
  }

  return (
    <SectionContainer>
      <SectionHeader>
        <FaEnvelope />
        <h3>Contact Me</h3>
      </SectionHeader>
    
      <Form
        action="https://formspree.io/f/xeoznape" 
        method="POST"
        onSubmit={handleSubmit}
      >
        <Row>
          <FormGroup>
            <Label htmlFor="name">Name:</Label>
            <Input type="text" id="name" name="name" required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" name="email" required />
          </FormGroup>
        </Row>

        <FormGroup>
          <Label htmlFor="phone">Phone Number:</Label>
          <Input type="tel" id="phone" name="phone" required />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <Textarea id="message" name="message" required />
        </FormGroup>

        <SubmitButton type="submit" disabled={status === 'Sending...'}>
          {status === 'Sending...' ? 'Sending...' : 'Send Message'}
        </SubmitButton>
      </Form>

      {status && <FormStatus success={status.includes("Message sent")}>{status}</FormStatus>}
    </SectionContainer>
  );
}

export default ContactForm;