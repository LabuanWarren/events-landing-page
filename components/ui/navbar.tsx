import React from 'react';
import styled from 'styled-components';
import { CTAButtonSmall } from './CTAButton';

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <LogoContainer>
          <Logo>
            <img src="/typid-logo.svg" alt="Typid Logo" />
          </Logo>
        </LogoContainer>
        
        <NavLinks>
          <NavLink>
            <NavLinkText>Events</NavLinkText>
          </NavLink>
          <NavLink>
            <NavLinkText>Pricing</NavLinkText>
          </NavLink>
          <NavLink>
            <NavLinkText>Products</NavLinkText>
            <DropdownIcon>
              <img src="/chevron-down.svg" alt="Dropdown" />
            </DropdownIcon>
          </NavLink>
        </NavLinks>
        
        <NavActions>
          <LoginButton>
            Login
          </LoginButton>
          <CTAButtonSmall label="Sign up" hideIcon />
        </NavActions>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: white;
  padding: 0.75rem 1rem;
  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    height: 28px;
    width: auto;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const NavLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: #0a7a94;
  }
`;

const NavLinkText = styled.span`
  font-size: 16px;
  font-family: 'DM Sans', sans-serif;
  line-height: 24px;
  color: #000000;
`;

const DropdownIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  
  img {
    height: 16px;
    width: 16px;
  }
`;

const NavActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const LoginButton = styled.button`
  border-radius: 0.5rem;
  padding: 0.625rem 1.25rem;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  font-size: 16px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  color: #000000;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f8f9fb;
  }
`;

export default Navbar;