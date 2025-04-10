"use client";

import React from "react";
import styled from "styled-components";

// Estilos para o container principal da seção de marcas
const BrandsContainer = styled.div`
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  flex-wrap: wrap; /* Permite que os itens "quebrem" para a próxima linha no mobile */

  @media (max-width: 768px) {
    padding: 1rem 2rem; /* Reduz o padding no mobile */
    justify-content: center; /* Centraliza as imagens no mobile */
    gap: 1.5rem; /* Ajusta o espaço entre os itens para telas menores */
  }
`;

// Estilos para cada imagem de marca
const BrandImage = styled.img`
  height: 48px;
  opacity: 0.7;
  filter: grayscale(100%);
  object-fit: contain;

  &:hover {
    opacity: 1;
    filter: grayscale(0%);
  }

  @media (max-width: 768px) {
    height: 36px; /* Reduz a altura das imagens no mobile */
  }
`;

const BrandsSection = () => {
  return (
    <BrandsContainer>
      <BrandImage src="/amazon.png" alt="Amazon Logo" />
      <BrandImage src="/dribbble.png" alt="Dribbble Logo" />
      <BrandImage src="/hubspot.png" alt="HubSpot Logo" />
      <BrandImage src="/notion.png" alt="Notion Logo" />
      <BrandImage src="/netflix.png" alt="Netflix Logo" />
      <BrandImage src="/zoom.png" alt="Zoom Logo" />
      {/* Adicione mais imagens conforme necessário */}
    </BrandsContainer>
  );
};

export default BrandsSection;