"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

// Estilos para o container principal da seção de serviços
const ServicesContainer = styled.section`
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
  background-color: #b9ff66;
  padding: 0.5rem;
  border-radius: 7px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const SectionDescription = styled.p`
  font-size: 18px;
  color: #000000;
  max-width: 45%;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 16px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Exibe 2 cards lado a lado */
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Cada card ocupa uma linha no mobile */
  }
`;

const ServiceCard = styled.div`
  background-color: #f3f3f3;
  border-radius: 45px;
  box-shadow: 0px 5px 0px 0px #191a23;
  padding: 50px;
  gap: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
 

  @media (max-width: 768px) {
    padding: 1.5rem; /* Ajusta o padding no mobile */
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 768px) {
   height: 100%; 
  }
`;

const CardTitle = styled.h3`
  font-size: 30px;
  font-weight: bold;
  color: #191a23;
  background-color: #b9ff66;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
`;

const LearnMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-size: 0.9rem;
  gap: 10px;
  color: #191a23;

`;

const LearnMoreIcon = styled.img`
  width: 20px;
   @media (max-width: 768px) {
    width: 30px;
  }
`;

const TitleLearn = styled.p`
  @media (max-width: 768px) {
    display: none;
  }
`;

const CardImage = styled.img`
  width: 150px;
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 120px; /* Reduz o tamanho da imagem no mobile */
  }
`;

const CallToActionCard = styled.div`
  background-color: #f3f3f3;
  border-radius: 45px;
  margin-top: 3rem;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CTAContent = styled.div`
  flex: 1;
  margin-right: 2rem;
  max-width: 70%;

  @media (max-width: 768px) {
    margin-right: 0;
    max-width: 100%;
  }
`;

const CTATitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: #191a23;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 18px;
  color: #191a23;
  line-height: 1.6;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 16px; /* Ajusta o tamanho da fonte no mobile */
  }
`;

const CTAFooter = styled.div`
  margin-top: 1rem;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center; /* Centraliza o botão no mobile */
  }
`;

const CTAButton = styled(Link)`
  background-color: #191a23;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 14px;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CTAImage = styled.img`
  width: 349px;
  height: 295px;
  object-fit: contain;

  @media (max-width: 768px) {
    display: none; /* Esconde a imagem do CTA no mobile */
  }
`;

const ServicesSection = () => {
  return (
    <ServicesContainer id="services"> {/* Adicione um ID para a navegação */}
      <SectionTitleContainer>
        <SectionTitle>Services</SectionTitle>
        <SectionDescription>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </SectionDescription>
      </SectionTitleContainer>
      <ServicesGrid>
        <ServiceCard>
          <CardContent>
            <CardTitle style={{ backgroundColor: '#B9FF66', color: '#191A23' }}>Search engine optimization</CardTitle>
            <LearnMoreLink href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <LearnMoreIcon src="/arrow-verde.png" alt="Arrow Right" />
              <TitleLearn>Learn more</TitleLearn>
            </LearnMoreLink>
          </CardContent>
          <CardImage src="/seo.png" alt="Search Engine Optimization" />
        </ServiceCard>

        <ServiceCard style={{ backgroundColor: '#B9FF66' }}>
          <CardContent>
            <CardTitle style={{ backgroundColor: '#ffffff', color: '#191A23' }}>Pay-per-click advertising</CardTitle>
            <LearnMoreLink href="https://www.google.com" target="_blank" rel="noopener noreferrer" style={{ color: '#191A23' }}>
              <LearnMoreIcon src="/arrow-verde.png" alt="Arrow Right" />
              <TitleLearn>Learn more</TitleLearn>
            </LearnMoreLink>
          </CardContent>
          <CardImage src="/ppc.png" alt="Pay-per-click Advertising" />
        </ServiceCard>

        <ServiceCard style={{ backgroundColor: '#191A23', color: '#fff' }}>
          <CardContent>
            <CardTitle style={{ backgroundColor: '#ffffff', color: '#191A23' }}>Social Media Marketing</CardTitle>
            <LearnMoreLink href="https://www.google.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
              <LearnMoreIcon src="/arrow-branca.png" alt="Arrow Right" />
              <TitleLearn>Learn more</TitleLearn>
            </LearnMoreLink>
          </CardContent>
          <CardImage src="/social-media.png" alt="Social Media Marketing" />
        </ServiceCard>

        <ServiceCard>
          <CardContent>
            <CardTitle style={{ backgroundColor: '#B9FF66', color: '#191A23' }}>Email Marketing</CardTitle>
            <LearnMoreLink href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <LearnMoreIcon src="/arrow-verde.png" alt="Arrow Right" />
              <TitleLearn>Learn more</TitleLearn>
            </LearnMoreLink>
          </CardContent>
          <CardImage src="/email.png" alt="Email Marketing" />
        </ServiceCard>

        <ServiceCard style={{ backgroundColor: '#B9FF66' }}>
          <CardContent>
            <CardTitle style={{ backgroundColor: '#ffffff', color: '#191A23' }}>Content Creation</CardTitle>
            <LearnMoreLink href="https://www.google.com" target="_blank" rel="noopener noreferrer" style={{ color: '#191A23' }}>
              <LearnMoreIcon src="/arrow-verde.png" alt="Arrow Right" />
              <TitleLearn>Learn more</TitleLearn>
            </LearnMoreLink>
          </CardContent>
          <CardImage src="/content.png" alt="Content Creation" />
        </ServiceCard>

        <ServiceCard style={{ backgroundColor: '#191A23', color: '#fff' }}>
          <CardContent>
            <CardTitle style={{ backgroundColor: '#B9FF66', color: '#191A23' }}>Analytics and Tracking</CardTitle>
            <LearnMoreLink href="https://www.google.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
              <LearnMoreIcon src="/arrow-branca.png" alt="Arrow Right" />
              <TitleLearn>Learn more</TitleLearn>
            </LearnMoreLink>
          </CardContent>
          <CardImage src="/analytics.png" alt="Analytics and Tracking" />
        </ServiceCard>
      </ServicesGrid>

      <CallToActionCard>
        <CTAContent>
          <CTATitle>Let&apos;s make things happen</CTATitle>
          <CTADescription>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </CTADescription>
          <CTAFooter>
            <CTAButton href="https://www.google.com" target="_blank" rel="noopener noreferrer">Get your free proposal</CTAButton>
          </CTAFooter>
        </CTAContent>
        <CTAImage src="/happen.png" alt="Let's make things happen" />
      </CallToActionCard>
    </ServicesContainer>
  );
};

export default ServicesSection;