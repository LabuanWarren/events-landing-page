import React from 'react';
import styled from 'styled-components';
import { CTAButton } from './CTAButton';

export const WhyTypid = () => {
  return (
    <WhyTypidWrapper>
      <WhyTypidHeader>
        <WhyTypidTitle>Why launch your events with Typid?</WhyTypidTitle>
        <WhyTypidContent>
          <WhyTypidDescription>
            The smarter way to host, sell, and manage events — built for organizers 
            who want clarity, control, and creative freedom. Typid Events brings your 
            entire workflow together: from event creation and Tycket sales to analytics, 
            vouchers, and booth design — everything runs seamlessly in one connected system.
          </WhyTypidDescription>
          <CTAButton label="Launch Your Event Now" />
        </WhyTypidContent>
      </WhyTypidHeader>
      
      {/* Feature highlights */}
      <FeatureHighlights>
        <FeatureItem>
          <FeatureIcon>
            <img src="/connected-icon.svg" alt="Connected" />
          </FeatureIcon>
          <FeatureTitle>Everything Connected</FeatureTitle>
          <FeatureDescription>
            No more juggling between tools. Events, Tyckets, discounts, and analytics — all work seamlessly within one platform.
          </FeatureDescription>
        </FeatureItem>
        
        <FeatureItem>
          <FeatureIcon>
            <img src="/organizers-icon.svg" alt="Organizers" />
          </FeatureIcon>
          <FeatureTitle>Designed for Organizers</FeatureTitle>
          <FeatureDescription>
            Built for creators who value clarity and control. Every feature is made to simplify your workflow, not complicate it.
          </FeatureDescription>
        </FeatureItem>
        
        <FeatureItem>
          <FeatureIcon>
            <img src="/insights-icon.svg" alt="Insights" />
          </FeatureIcon>
          <FeatureTitle>Real-Time Insights</FeatureTitle>
          <FeatureDescription>
            Track every sale, attendee, and voucher redemption as it happens. Make decisions backed by live data.
          </FeatureDescription>
        </FeatureItem>
        
        <FeatureItem>
          <FeatureIcon>
            <img src="/Tycket-booth.svg" alt="Booth" />
          </FeatureIcon>
          <FeatureTitle>Customizable Tycket Booth</FeatureTitle>
          <FeatureDescription>
            Your brand deserves to stand out. Design your Tycket Booth the way you want — from colors to layout.
          </FeatureDescription>
        </FeatureItem>
        
        <FeatureItem>
          <FeatureIcon>
            <img src="/Sheild.svg" alt="Secure" />
          </FeatureIcon>
          <FeatureTitle>Secure Payments with Typid Pay</FeatureTitle>
          <FeatureDescription>
            Every transaction runs through Typid Pay, ensuring fast, safe, and transparent payment processing.
          </FeatureDescription>
        </FeatureItem>
      </FeatureHighlights>
    </WhyTypidWrapper>
  );
};

const WhyTypidWrapper = styled.section`
  padding: 7rem 4rem;
  background-color: #ffffff;
  
  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const WhyTypidHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5rem;
  max-width: 1280px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

const WhyTypidTitle = styled.h2`
  text-align: left;
  vertical-align: top;
  font-size: 48px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  letter-spacing: -2%;
  line-height: 1.2;
  color: #000000;
  flex: 1;
  max-width: 500px;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const WhyTypidContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.6875rem;
  flex: 1;
`;

const WhyTypidDescription = styled.p`
  text-align: left;
  vertical-align: top;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  line-height: 150%;
  color: #000000;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const WhyTypidButton = styled.a`
  border-radius: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #f0f9ff;
  border: 0.125rem solid #0a7a94;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  
  &:hover {
    background-color: #e0f2fe;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(6, 54, 70, 0.15);
  }
`;

const ButtonText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0.5rem;
`;

const ButtonLabel = styled.span`
  text-align: left;
  vertical-align: middle;
  font-size: 16px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  line-height: 24px;
  color: #0d0f1b;
`;

const ButtonIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.625rem;
  
  img {
    height: 24px;
    width: 24px;
  }
`;

// Feature highlights section
const FeatureHighlights = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-top: 5rem;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 3rem;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const FeatureTitle = styled.h3`
  font-family: 'DM Sans', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin: 0;
`;

const FeatureDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 150%;
  color: #4b5563;
  margin: 0;
`;