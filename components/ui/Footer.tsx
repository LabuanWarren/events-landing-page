import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <FooterLogo>
            <LogoWrap>
              <img src="/typid-logo-white.svg" alt="Typid Logo" className="w-full h-auto object-contain"/>
            </LogoWrap>
          </FooterLogo>
          <FooterLinks>
            <FooterLink>About us</FooterLink>
            <FooterLink>Contact</FooterLink>
            <FooterLink>Blog</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Help</FooterLink>
          </FooterLinks>
        </FooterContent>
        <FooterCredits>
          <FooterDivider />
          <FooterRow>
            <CopyrightText>© 2025 Typid Events by Night Latte.</CopyrightText>
            <FooterPolicyLinks>
              <PolicyRouterLink to="/privacy">Privacy policy</PolicyRouterLink>
              <PolicyRouterLink to="/terms">Terms of service</PolicyRouterLink>
            </FooterPolicyLinks>
          </FooterRow>
        </FooterCredits>
      </FooterContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5rem 4rem;
  gap: 5rem;
  background-color: #011b24;
  
  @media (max-width: 768px) {
    padding: 3rem 2rem;
    gap: 3rem;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5rem;
  max-width: 1280px;
  width: 100%;
  
  @media (max-width: 768px) {
    gap: 3rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

const FooterLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const LogoWrap = styled.div`
  height: 32px;
  width: 108px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  
  img {
    height: 25px;
    width: 102px;
    object-fit: contain;
  }
`;

const FooterLinks = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

const FooterLink = styled.a`
  text-align: left;
  vertical-align: top;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  line-height: 20px;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: #0a7a94;
  }
`;

const FooterCredits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

const FooterDivider = styled.div`
  height: 0px;
  width: 100%;
  max-width: 1280px;
  border: 0.0625rem solid #0a7a94;
`;

const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

const CopyrightText = styled.span`
  text-align: left;
  vertical-align: top;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  line-height: 20px;
  color: #ffffff;
`;

const FooterPolicyLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const PolicyLink = styled.a`
  text-align: left;
  vertical-align: top;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  line-height: 20px;
  text-decoration: underline;
  color: #ffffff;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: #0a7a94;
  }
`;

const PolicyRouterLink = styled(Link)`
  text-align: left;
  vertical-align: top;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  line-height: 20px;
  text-decoration: underline;
  color: #ffffff;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #0a7a94;
  }
`;