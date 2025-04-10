/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #191A23;
  color: #fff;
  padding: 55px 60px 50px 60px;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  display: flex; 
  flex-direction: column; 
  align-items: center;

  @media (max-width: 768px) {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`;

const FooterTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    height: 24px;

    @media (max-width: 768px) {
      height: 34px;
    }
  }
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center; 
    }
  }

  li {
    a {
      color: #ffffff;
      font-size: 18px;
      font-weight: 400;
      border-bottom: 1px solid #ffffff; 
      padding-bottom: 1px; 

      &:hover {
        color: #ccc;
        border-bottom-color: #ccc;
      }

      @media (max-width: 768px) {
        border-bottom: none;
      }
    }
  }
`;

const Icones = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const IconLink = styled.a`
  background-color: #fff; 
  color: #000000;
  border-radius: 50%; 
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem; /* Tamanho dos ícones */
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc;
    color: #191A23;
  }
`;

const FooterMiddle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  h4 {
    width: 20%;
    background-color: #B9FF66;
    color: #000000;
    margin-bottom: 1rem;
    font-size: 20px;
    font-weight: 500;
    border-radius: 7px;
    text-align: center;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  p {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #FFFFFF;
  }
`;

const NewsletterSignup = styled.div`
  background-color: #292A32;
  padding: 58px 40px 58px 40px;
  gap: 20px;
  display: flex;
  align-items: flex-start;
  border-radius: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }

  label {
    display: none;
  }

  input[type="email"] {
    background-color: #22252E;
    color: #ffffff;
    border: 1px solid #FFFFFF;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    width: 100%;
    max-width: 300px;
    font-size: 18px;

    &::placeholder { /* Estiliza o placeholder */
      color: #ffffff;
      
    }

    &:focus {
      outline: none;
      border-color: #B9FF66;
    }

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  button {
    background-color: #B9FF66;
    color: #000;
    border: none;
    border-radius: 8px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out; 

    &:hover {
      background-color: #a6e05a;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #FFFFFF;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  a {
    color: #FFFFFF;
    border-bottom: 1px solid #ffffff; 
    padding-bottom: 1px;
    

    &:hover {
      color: #ccc;
      border-bottom-color: #ccc;
    }

    @media (max-width: 768px) {
      border-bottom: none;
    }
  }

  div {
    display: flex;
    gap: 1rem;

    a {
      font-size: 1.2rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <Logo>
          <img src="/logo-footer.png" alt="Positivus Logo" />
        </Logo>
        <Navigation>
          <ul>
            <li><a href="#contact">About us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#use-cases">Use Cases</a></li>
            <li><a href="https://www.google.com/">Pricing</a></li>
            <li><a href="https://www.google.com/">Blog</a></li>
          </ul>
        </Navigation>
        <Icones>
          <IconLink href="https://www.linkedin.com/in/leonardosilvachagas/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></IconLink>
          <IconLink href="https://www.facebook.com/?locale=pt_BR" target="_blank" rel="noopener noreferrer"><FaFacebookF /></IconLink>
          <IconLink href="https://x.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></IconLink>
        </Icones>
      </FooterTop>
      <FooterMiddle>
        <ContactInfo>
          <h4>Contact us:</h4>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St<br />Moonstone City, Stardust State 12345</p>
        </ContactInfo>
        <NewsletterSignup>
          <label htmlFor="newsletterEmail">Email</label>
          <input type="email" id="newsletterEmail" placeholder="Email" />
          <button>Subscribe to news</button>
        </NewsletterSignup>
      </FooterMiddle>
      <FooterBottom>
        <span>© 2023 Positivus, All Rights Reserved.</span>
        <a>Privacy Policy</a>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;