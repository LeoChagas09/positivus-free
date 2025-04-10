"use client";

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const CaseStudiesContainer = styled.section`
  padding: 4rem 5rem;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  border-radius: 5px;
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
  max-width: 45%;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 16px;
  }
`;

const CaseStudyCard = styled.div`
  background-color: #191A23;
  color: #fff;
  border-radius: 45px;
  gap: 64px;
  padding: 2rem;
  display: flex;
  justify-content: space-around; /* Distribui o espaço entre os exemplos */

  @media (max-width: 1024px) {
    flex-direction: column; /* Empilha os exemplos em telas menores */
    gap: 2rem;
    padding: 1.5rem;
  }
`;

const CaseStudyExample = styled.div`
  flex: 1; /* Cada exemplo ocupa uma porção igual do espaço */
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  align-items: flex-start;

  &:not(:first-child) {
    border-left: 1px solid #ffffff; /* Adiciona a linha vertical entre os exemplos */

    @media (max-width: 1024px) {
      border-left: none; /* Remove a linha em telas menores */
      border-top: 1px solid #ffffff; /* Adiciona uma linha horizontal entre os exemplos */
      padding-top: 1rem;
    }
  }
`;

const CaseStudyDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const LearnMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-size: 0.9rem;
  gap: 10px;
  color: #B9FF66;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const LearnMoreIcon = styled.img`
  width: 20px;
  height: auto;

  @media (max-width: 768px) {
    width: 16px;
  }
`;

const CaseStudiesSection = () => {
  return (
    <CaseStudiesContainer id="use-cases">
      <SectionTitleContainer>
        <SectionTitle>Case Studies</SectionTitle>
        <SectionSubtitle>
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </SectionSubtitle>
      </SectionTitleContainer>
      <CaseStudyCard>
        <CaseStudyExample>
          <CaseStudyDescription>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </CaseStudyDescription>
          <LearnMoreLink href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            Learn more
            <LearnMoreIcon src="/arrow-case.png" alt="Arrow Right" />
          </LearnMoreLink>
        </CaseStudyExample>

        <CaseStudyExample>
          <CaseStudyDescription>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </CaseStudyDescription>
          <LearnMoreLink href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            Learn more
            <LearnMoreIcon src="/arrow-case.png" alt="Arrow Right" />
          </LearnMoreLink>
        </CaseStudyExample>

        <CaseStudyExample>
          <CaseStudyDescription>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20% increase
            in online sales.
          </CaseStudyDescription>
          <LearnMoreLink href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            Learn more
            <LearnMoreIcon src="/arrow-case.png" alt="Arrow Right" />
          </LearnMoreLink>
        </CaseStudyExample>
      </CaseStudyCard>
    </CaseStudiesContainer>
  );
};

export default CaseStudiesSection;