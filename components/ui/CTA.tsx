import React from 'react';
import styled from 'styled-components';
import { CTAButton } from './CTAButton';


export const CTA = () => {
  return (
    <CTAWrapper>
      <CTAContainer>
        <CTAColumn>
          <CTAContent>
            <CTATitle>Bring your events to life</CTATitle>
            <CTADescription>Everything you need to create, manage, and elevate your events.</CTADescription>
          </CTAContent>
          <CTAButton label="Get Started" />
        </CTAColumn>
      </CTAContainer>
    </CTAWrapper>
  );
};

const CTAWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 7rem 4rem;
  gap: 5rem;
  background-color: #ffffff;
  
  @media (max-width: 768px) {
    padding: 4rem 2rem;
    gap: 3rem;
  }
`;

const CTAContainer = styled.div`
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

const CTAColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  background-color: #ffffff;
`;

const CTAContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
`;

const CTATitle = styled.h2`
  text-align: center;
  vertical-align: top;
  font-size: 48px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  letter-spacing: -2%;
  line-height: 60%;
  color: #000000;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 1.2;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const CTADescription = styled.p`
  text-align: center;
  vertical-align: top;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  line-height: 150%;
  color: #000000;
  margin: 0;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
