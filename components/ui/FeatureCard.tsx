import React from 'react';
import styled from 'styled-components';

interface FeatureCardProps {
  badge: string;
  title: string;
  features: string[];
  image: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ badge, title, features, image }) => {
  return (
    <Card>
      <Content>
        <TitleSection>
          <Badge>
            <BadgeText>{badge}</BadgeText>
            <BadgeDecoration>
              <Line />
              <Circle />
            </BadgeDecoration>
          </Badge>
          <Heading>{title}</Heading>
        </TitleSection>
        <FeatureList>
          {features.map((feature, index) => (
            <FeatureItem key={index}>
              <FeatureIcon>
                <img src="/bullet-asterisk.svg" alt="Feature bullet" />
              </FeatureIcon>
              <FeatureText>{feature}</FeatureText>
            </FeatureItem>
          ))}
        </FeatureList>
      </Content>
      <Divider>
        {Array(22).fill(0).map((_, i) => (
          <DividerLine key={i} />
        ))}
      </Divider>
      <CardImage src={image} alt={`${badge} feature`} />
    </Card>
  );
};

const Card = styled.div`
  border-radius: 1.5rem;
  border: 1px solid #dcdfe9;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 12px 16px -4px rgba(26, 77, 164, 0.08), 0 4px 6px -2px rgba(3, 31, 81, 0.03), 0 2px 2px -1px rgba(0, 34, 93, 0.04);
  overflow: hidden;
  max-width: 1280px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0rem 4.5rem;
  gap: 1.5rem;
  flex: 1 1 0;
  min-width: 0; /* allow content to wrap instead of forcing image to shrink */
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
`;

const Badge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0rem 4.5rem 0rem 0rem;
  gap: 1.5rem;
`;

const BadgeText = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 12px;
  font-family: 'DM Sans', sans-serif;
  letter-spacing: 4.8px;
  line-height: 18px;
  color: #000000;
`;

const BadgeDecoration = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.625rem;
`;

const Line = styled.div`
  height: 1px;
  width: 212px;
  background-color: #7d89af;
  
  @media (max-width: 768px) {
    width: 100px;
  }
`;

const Circle = styled.div`
  height: 12px;
  width: 12px;
  border: 1px solid #7d89af;
  border-radius: 50%;
`;

const Heading = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 36px;
  font-family: 'DM Sans', sans-serif;
  letter-spacing: -0.72px;
  line-height: 44px;
  color: #000000;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.75rem;
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.75rem;
`;

const FeatureIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.25rem;
  
  img {
    width: 22px;
    height: 22px;
  }
`;

const FeatureText = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 16px;
  font-family: 'DM Sans', sans-serif;
  line-height: 24px;
  color: #000000;
`;

const Divider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.75rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const DividerLine = styled.div`
  height: 17px;
  width: 1px;
  background-color: #dcdfe9;
`;

const CardImage = styled.img`
  width: 696px;
  height: auto;
  max-height: 640px;
  object-fit: contain;
  display: block;
  flex: 0 0 696px; /* fixed column for uniform width */
  
  @media (max-width: 768px) {
    flex: 0 0 auto;
    width: 100%;
    height: auto;
    max-height: 400px;
  }
`;