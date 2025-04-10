"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = styled.section`
  padding: 4rem 5rem;
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 500;
  background-color: #B9FF66;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 36px;
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 18px;
  
  @media (min-width: 768px) {
    max-width: 45%;
    font-size: 16px;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  background-color: #191A23;
  border-radius: 45px;
  padding: 1.5rem;
  
  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const CarouselTrack = styled.div`
  position: relative;
  overflow: hidden;
`;

const CarouselSlides = styled.div<{ $translate: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${props => props.$translate}%);
`;

const Slide = styled.div`
  flex: 0 0 100%;
  padding: 0 1rem;
`;

const TestimonialCard = styled.div`
  background-color: #22252E;
  border: 1px solid #B9FF66;
  border-radius: 1.5rem;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TestimonialText = styled.p`
  color: white;
  font-size: 1.125rem;
  line-height: 1.75;
  margin-bottom: 2rem;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  color: #B9FF66;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const AuthorTitle = styled.p`
  color: white;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const NavigationButton = styled.button`
  background: none;
  border: none;
  color: white;
  padding: 0.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #B9FF66;
  }
`;

const Indicators = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const Indicator = styled.button<{ $active: boolean }>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.$active ? '#B9FF66' : 'white'};
  opacity: ${props => props.$active ? 1 : 0.5};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: ${props => props.$active ? 1 : 0.75};
  }
`;

interface Testimonial {
  text: string;
  name: string;
  title: string;
}

const testimonialsData: Testimonial[] = [
  {
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name: 'John Smith',
    title: 'Marketing Director at XYZ Corp',
  },
  {
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name: 'Jane Doe',
    title: 'CEO at ABC Innovations',
  },
  {
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name: 'Michael Brown',
    title: 'Owner at PQR Solutions',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <TestimonialsSection>
      <HeaderContainer>
        <Title>Testimonials</Title>
        <Description>
          Hear From Our Satisfied Clients; Read Our Testimonials To Learn More About Our Digital Marketing Services
        </Description>
      </HeaderContainer>

      <CarouselContainer>
        <CarouselTrack>
          <CarouselSlides $translate={currentIndex * 100}>
            {testimonialsData.map((testimonial, index) => (
              <Slide key={index}>
                <TestimonialCard>
                  <TestimonialText>{testimonial.text}</TestimonialText>
                  <AuthorInfo>
                    <AuthorName>{testimonial.name}</AuthorName>
                    <AuthorTitle>{testimonial.title}</AuthorTitle>
                  </AuthorInfo>
                </TestimonialCard>
              </Slide>
            ))}
          </CarouselSlides>
        </CarouselTrack>

        <Controls>
          <NavigationButton onClick={prevSlide} aria-label="Previous slide">
            <ChevronLeft size={24} />
          </NavigationButton>
          
          <Indicators>
            {testimonialsData.map((_, index) => (
              <Indicator
                key={index}
                $active={index === currentIndex}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </Indicators>

          <NavigationButton onClick={nextSlide} aria-label="Next slide">
            <ChevronRight size={24} />
          </NavigationButton>
        </Controls>
      </CarouselContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;