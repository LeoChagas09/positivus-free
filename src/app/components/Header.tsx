"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react'; // Importando os ícones

// Estilos para o container principal do header
const HeaderContainer = styled.header`
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
`;

// Estilos para o logo (container da imagem)
const LogoContainer = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
`;

// Estilos para a imagem do logo
const LogoImage = styled.img`
  height: 30px;

  @media (max-width: 768px) {
    height: 24px;
  }
`;

// Estilos para o botão de menu hamburguer
const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Estilos para a navegação
const Navigation = styled.nav<{ isopen: boolean }>`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isopen }) => (isopen ? 'flex' : 'none')};
    position: absolute;
    top: 60px;
    left: 0;
    flex-direction: column;
    background-color: white;
    width: 100%;
    padding: 1rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
`;

// Estilos para os links de navegação
const NavLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;

  @media (max-width: 768px) {
    padding: 0.5rem 0;
    text-align: center;
  }
`;

// Estilos para o botão "Request a quote"
const QuoteButton = styled.button`
  background-color: transparent;
  color: #000000;
  padding: 0.75rem 1.5rem;
  border: 1px solid #000000;
  border-radius: 14px;
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Space Grotesk', sans-serif;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const logoImagePath = '/logo.png';

  return (
    <HeaderContainer>
      <LogoContainer href="/">
        <LogoImage src={logoImagePath} alt="Logo Positivus" />
      </LogoContainer>
      <MenuButton onClick={toggleMenu}>
        {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
      </MenuButton>
      <Navigation isopen={isMenuOpen}>
        <NavLink href="#contact">About us</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#use-cases">Use Cases</NavLink>
        <NavLink href="https://www.google.com/">Pricing</NavLink>
        <NavLink href="https://www.google.com/">Blog</NavLink>
        <QuoteButton>Request a quote</QuoteButton>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;