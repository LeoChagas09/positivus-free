"use client";

import React, { useState } from 'react';
import styled from 'styled-components';

const WorkingProcessContainer = styled.section`
  padding: 4rem 5rem;
  @media (max-width: 768px) {
    padding: 1rem 2rem; /* Ajusta o padding para telas menores */
  }
`;

const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center; /* Alinha verticalmente o título e a descrição */
  border-radius: 5px; /* Opcional: para cantos arredondados */
  gap: 40px;
  margin-bottom: 2rem; /* Adiciona espaço abaixo do título da seção */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center; /* Centraliza o texto em telas menores */
  }
`;

const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 500;
  color: #000000;
  border-radius: 7px;
  padding-right: 7px;
  padding-left: 7px;
  background-color: #B9FF66;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const SectionDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #000000;
  max-width: 25%; /* Defina uma largura máxima para forçar a quebra de linha */

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 16px;
  }
`;

interface AccordionItemWrapperProps {
  isopen: boolean;
}

const AccordionItemWrapper = styled.div<AccordionItemWrapperProps>`
  background-color: ${({ isopen }) => (isopen ? '#B9FF66' : '#fff')};
  border-radius: 45px;
  margin-bottom: 1rem;
  gap: 45px;
  box-shadow: 0px 5px 0px 0px #191A23;
  overflow: hidden;
`;

interface AccordionTitleProps {
  isopen: boolean;
  index: number;
  totalitems: number;
}

const AccordionTitle = styled.div<AccordionTitleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 41px 60px 41px 60px;
  cursor: pointer;
  font-weight: bold;
  color: #000000;

  &:last-child {
    border-bottom: none;
  }

  background-color: ${({ isopen }) => (isopen ? '#B9FF66' : '#F3F3F3')};
  border-radius: ${({ index }) => (index === 0 ? '10px 10px 0 0' : '')};

  @media (max-width: 768px) {
    padding: 20px 30px;
  }
`;

const StepNumber = styled.span`
  font-size: 60px;
  color: #000000;
  font-weight: 500;
  margin-right: 1rem;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const TitleText = styled.span`
  flex-grow: 1;
  font-size: 30px;
  font-weight: 500;
  line-height: 100%;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Icon = styled.span<AccordionItemWrapperProps>`
  font-size: 35px;
  color: #000000;
  background-color: #F3F3F3;
  width: 58px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #191A23;
  border-radius: 50%;
  margin-left: 1rem;

  @media (max-width: 768px) {
    font-size: 25px;
    width: 30px;
    height: 30px;
  }
`;

const AccordionContent = styled.div`
  padding: 41px 60px 41px 60px;
  color: #000000;
  line-height: 1.6;
  white-space: pre-line; /* Preserva quebras de linha do conteúdo */

  @media (max-width: 768px) {
    padding: 20px 30px;
  }
`;

const accordionData = [
  {
    title: 'Consultation',
    content: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
  },
  {
    title: 'Research and Strategy Development',
    content: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
  },
  {
    title: 'Implementation',
    content: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
  },
  {
    title: 'Monitoring and Optimization',
    content: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
  },
  {
    title: 'Reporting and Communication',
    content: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
  },
  {
    title: 'Continual Improvement',
    content: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
  },
];

interface AccordionItemProps {
  index: number;
  title: string;
  content: string;
  isopen: boolean;
  ontoggle: (index: number) => void;
  totalitems: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ index, title, content, isopen, ontoggle, totalitems }) => {
  isopen = isopen || false; // Define o estado inicial como fechado

  return (
    <AccordionItemWrapper isopen={isopen}>
      <AccordionTitle isopen={isopen} index={index} onClick={() => ontoggle(index)} totalitems={totalitems}>
        <StepNumber>{String(index + 1).padStart(2, '0')}</StepNumber>
        <TitleText>{title}</TitleText>
        <Icon isopen={isopen}>{isopen ? '−' : '+'}</Icon>
      </AccordionTitle>
      {isopen && (
        <div style={{ marginLeft: '60px', marginRight: '60px' }}>
          <div style={{ height: '1px', backgroundColor: '#000000' }} />
        </div>
      )}
      {isopen && <AccordionContent>{content}</AccordionContent>}
    </AccordionItemWrapper>
  );
};

const WorkingProcessSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Inicialmente abre o primeiro item

  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? -1 : index)); // Alterna abrir/fechar
  };

  return (
    <WorkingProcessContainer>
      <SectionTitleContainer>
        <SectionTitle>Our Working Process</SectionTitle>
        <SectionDescription>
          Step-by-Step Guide to Achieving Your Business Goals
        </SectionDescription>
      </SectionTitleContainer>
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          isopen={openIndex === index}
          ontoggle={handleToggle}
          totalitems={accordionData.length}
        />
      ))}
    </WorkingProcessContainer>
  );
};

export default WorkingProcessSection;