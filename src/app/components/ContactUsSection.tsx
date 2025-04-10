"use client";

import React, { useState } from 'react';
import styled from 'styled-components';

const ContactUsContainer = styled.section`
  padding: 4rem 5rem;

  @media (max-width: 768px) {
    padding: 1rem 2rem; /* Ajusta o padding para telas menores */
  }
`;

const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center; /* Centraliza o texto em telas menores */
  }
`;

const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 500;
  color: #000;
  border-radius: 7px;
  padding-right: 7px;
  padding-left: 7px;
  background-color: #B9FF66;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  color: #000000;
  max-width: 30%;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 16px;
  }
`;

const ContactFormCard = styled.div`
  background-color: #F3F3F3;
  border-radius: 45px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  overflow: hidden; /* Garante que a imagem com border-radius fique dentro */
`;

const FormContainer = styled.div`
  flex: 1; /* O formulário ocupa o espaço restante */
  padding: 3rem; /* Espaço interno do formulário */

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const FormOptions = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const RadioInput = styled.input`
  type: 'radio';
  width: 28px;
  height: 28px;
  border-radius: 29px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #000000;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  padding: 18px 30px 18px 30px;
  border: 1px solid #000000;
  border-radius: 14px;
  font-size: 18px;
  background-color: #fff;
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #000000;
  border-radius: 14px;
  font-size: 18px;
  min-height: 100px;
  background-color: #fff;
`;

const SubmitButton = styled.button`
  background-color: #191A23;
  width: 100%;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 14px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const ImageContainer = styled.div`
  width: 40%;
  height: auto;
  display: flex; 
  justify-content: flex-end; 
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px 0 45px 0; /* Arredonda apenas os cantos desejados */
`;

const ContactUsSection = () => {
  const [contactType, setContactType] = useState('sayHi');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContactTypeChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setContactType(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Aqui é a implementação da lógica para enviar o formulário
    alert('Formulário enviado com sucesso!');
    // Limpar os campos após o envio (opcional)
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ContactUsContainer id="contact">
      <SectionTitleContainer>
        <SectionTitle>Contact Us</SectionTitle>
        <SectionSubtitle>Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs</SectionSubtitle>
      </SectionTitleContainer>
      <ContactFormCard>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormOptions>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  value="sayHi"
                  checked={contactType === 'sayHi'}
                  onChange={handleContactTypeChange}
                />
                Say Hi
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  value="getQuote"
                  checked={contactType === 'getQuote'}
                  onChange={handleContactTypeChange}
                />
                Get a Quote
              </RadioLabel>
            </FormOptions>

            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email*</Label>
              <Input
                type="email"
                id="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message*</Label>
              <Textarea
                id="message"
                placeholder='Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </FormGroup>

            <SubmitButton type="submit">Send Message</SubmitButton>
          </form>
        </FormContainer>
        <ImageContainer>
          <ContactImage src="/contact.png" alt="Contact Us" />
        </ImageContainer>
      </ContactFormCard>
    </ContactUsContainer>
  );
};

export default ContactUsSection;