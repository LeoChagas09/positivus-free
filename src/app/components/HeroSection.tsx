"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";

// Container principal da seção Hero
const HeroContainer = styled.section`
  padding: 2rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 1rem 2rem;
    text-align: center;
  }
`;

// Container para a parte do texto
const TextContent = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// Estilização do título principal
const Title = styled.h1`
  font-size: 64px;
  font-weight: 700;
  line-height: 1.1;
  color: #000;

  @media (max-width: 768px) {
    font-size: 43px;
  }
`;

// Estilização da descrição
const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin: 1.5rem 0;
  color: #000;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Botão da consulta
const ConsultationButton = styled(Link)`
  display: inline-block;
  background-color: #191a23;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 14px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
    font-size: 16px;
  }
`;

// Container para a imagem
const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 1rem 0;
  }
`;

// Estilização da imagem
const HeroImage = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Verificar na montagem inicial
    handleResize();

    // Adicionar listener para redimensionamento
    window.addEventListener('resize', handleResize);

    // Remover listener na desmontagem
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <HeroContainer>
      {isMobile ? (
        <>
          <Title>Navigating the digital landscape for success</Title>
          <ImageContainer>
            <HeroImage src="/home.jpg" alt="Digital Marketing Illustration" />
          </ImageContainer>
          <TextContent>
            <Description>
              Our digital marketing agency helps businesses grow and succeed online
              through a range of services including SEO, PPC, social media marketing,
              and content creation.
            </Description>
            <ConsultationButton
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a consultation
            </ConsultationButton>
          </TextContent>
        </>
      ) : (
        <>
          <TextContent>
            <Title>Navigating the digital landscape for success</Title>
            <Description>
              Our digital marketing agency helps businesses grow and succeed online
              through a range of services including SEO, PPC, social media marketing,
              and content creation.
            </Description>
            <ConsultationButton
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a consultation
            </ConsultationButton>
          </TextContent>
          <ImageContainer>
            <HeroImage src="/home.jpg" alt="Digital Marketing Illustration" />
          </ImageContainer>
        </>
      )}
    </HeroContainer>
  );
};

export default HeroSection;