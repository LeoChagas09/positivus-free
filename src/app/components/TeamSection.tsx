"use client";

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const TeamSection = styled.div`
  padding: 4rem 5rem;

  @media (max-width: 768px) {
    padding: 1rem 2rem; /* Ajusta o padding para telas menores */
  }
`;

const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center; /* Centraliza o texto em telas menores */
  }
`;

const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 500;
  color: #000000;
  background-color: #B9FF66;
  padding: 5px 10px;
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const SectionDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #000000;
  max-width: 40%;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 16px;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
`;

const TeamCard = styled.div`
  background-color: #fff;
  border: 1px solid #191A23;
  border-radius: 45px; 
  box-shadow: 0px 5px 0px 0px #191A23;
  padding: 40px 35px 40px 35px;
  gap: 10px;
  text-align: left;
  position: relative;

  @media (max-width: 768px) {
    padding: 60px 50px 60px 50px;
  }
`;

const ProfileImageWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0px 5px 0px 0px #191A23;
  overflow: hidden;
  margin-bottom: 15px;
  position: relative;
`;

const ProfileImage = styled(Image)`
  object-fit: cover;
`;

const LinkedInIconWrapper = styled.a`
  position: absolute;
  top: 35px;
  right: 35px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #000000;
  color: #B9FF66;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  text-decoration: none;
`;

const Name = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 5px;
  line-height: 100%;
`;

const TitleRole = styled.p`
  font-size: 18px;
  color: #000000;
  font-weight: 400;
  margin-bottom: 10px;
  line-height: 100%;
`;

const Experience = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #000000;
  margin-bottom: 5px;
`;

const SeeAllButton = styled.button`
  display: block;
  width: 269px;
  padding: 20px 35px 20px 35px;
  background-color: #191A23;
  color: #ffffff;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  margin-top: 30px; 
  margin-left: auto;

  &:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;

interface TeamMemberProps {
  name: string;
  role: string;
  experience: string[];
  imageUrl: string;
  linkedinUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, experience, imageUrl, linkedinUrl }) => (
  <TeamCard>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <ProfileImageWrapper>
        <ProfileImage src={`${imageUrl}`} alt={name} width={100} height={100}/>
      </ProfileImageWrapper>
      <div style={{ marginLeft: '15px' }}>
        <Name>{name}</Name>
        <TitleRole>{role}</TitleRole>
      </div>
      <LinkedInIconWrapper href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        In
      </LinkedInIconWrapper>
    </div>
    <div>
      <hr className='mb-4'/>
      {experience.map((exp, index) => (
        <Experience key={index}>{exp}</Experience>
      ))}
    </div>
  </TeamCard>
);

const Team = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO and Founder',
      experience: [
        '10+ years of experience in digital marketing.',
        'Expertise in SEO, PPC, and content strategy',
      ],
      imageUrl: '/john-smith.png',
      linkedinUrl: 'https://www.linkedin.com/in/leonardosilvachagas/', // Replace with actual LinkedIn URL
    },
    {
      name: 'Jane Doe',
      role: 'Director of Operations',
      experience: [
        '7+ years of experience in project management and team leadership.',
        'Strong organizational and communication skills',
      ],
      imageUrl: '/jane-doe.png',
      linkedinUrl: 'https://www.linkedin.com/in/leonardosilvachagas/', // Replace with actual LinkedIn URL
    },
    {
      name: 'Michael Brown',
      role: 'Senior SEO Specialist',
      experience: [
        '5+ years of experience in SEO and content creation.',
        'Proficient in keyword research and on-page optimization',
      ],
      imageUrl: '/michael-brown.png',
      linkedinUrl: 'https://www.linkedin.com/in/leonardosilvachagas/', // Replace with actual LinkedIn URL
    },
    {
      name: 'Emily Johnson',
      role: 'PPC Manager',
      experience: [
        '3+ years of experience in paid search advertising.',
        'Skilled in campaign management and performance analysis',
      ],
      imageUrl: '/emily-johnson.png',
      linkedinUrl: 'https://www.linkedin.com/in/leonardosilvachagas/', // Replace with actual LinkedIn URL
    },
    {
      name: 'Brian Williams',
      role: 'Social Media Specialist',
      experience: [
        '4+ years of experience in social media marketing.',
        'Proficient in creating and scheduling content, analyzing metrics, and building engagement',
      ],
      imageUrl: '/brian-williams.png',
      linkedinUrl: 'https://www.linkedin.com/in/leonardosilvachagas/', // Replace with actual LinkedIn URL
    },
    {
      name: 'Sarah Kim',
      role: 'Content Creator',
      experience: [
        '2+ years of experience in writing and editing.',
        'Skilled in creating compelling, SEO-optimized content for various industries',
      ],
      imageUrl: '/sarah-kim.png',
      linkedinUrl: 'https://www.linkedin.com/in/leonardosilvachagas/', // Replace with actual LinkedIn URL
    },
  ];

  return (
    <TeamSection>
      <SectionTitleContainer>
        <SectionTitle>Team</SectionTitle>
        <SectionDescription>
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </SectionDescription>
      </SectionTitleContainer>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </TeamGrid>
      <SeeAllButton>See all team</SeeAllButton>
    </TeamSection>
  );
};

export default Team;