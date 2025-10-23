import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FeatureCard } from './FeatureCard';

export const Features = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardOffsetsRef = useRef<number[]>([]);
  const tickingRef = useRef(false);
  
  const featureCards = [
    {
      badge: 'DASHBOARD',
      title: 'See everything that matters at a glance.',
      features: [
        'Attendee insights and analytics',
        'Track ticket sales and entry in real time',
        'Visual performance dashboard'
      ],
      image: '/FeatureDashboard.webp'
    },
    {
      badge: 'EVENTS',
      title: 'Create, manage, and publish events effortlessly.',
      features: [
        'Create events with custom details',
        'Add participant limits and auto-close registration',
        'Manage event listings and visibility'
      ],
      image: '/FeatureEvents.webp'
    },
    {
      badge: 'TYCKETS',
      title: 'Sell your event Tyckets with precision.',
      features: [
        'Multiple Tycket tiers and pricing',
        'QR-code ready for check-ins',
        'Real-time redemption tracking'
      ],
      image: '/FeatureTyckets.webp'
    },
    {
      badge: 'VOUCHER',
      title: 'Add instant value to your events.',
      features: [
        'Fixed or percentage-based vouchers',
        'Expiration and usage tracking'
      ],
      image: '/FeatureVoucher.webp'
    },
    {
      badge: 'AFFILIATE CODE',
      title: 'Turn your supporters into sellers.',
      features: [
        'Unique code per affiliate',
        'Adjustable commission rates',
        'Transparent sales dashboard'
      ],
      image: '/FeatureAffiliateCodes.webp'
    }
  ];

  useEffect(() => {
    // Capture stable offsets relative to the container once layout is ready
    const measure = () => {
      if (!containerRef.current) return;
      cardOffsetsRef.current = cardRefs.current.map(el => (el ? el.offsetTop : 0));
    };
    requestAnimationFrame(measure);

    const stickyOffset = 100; // px from top

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        tickingRef.current = false;
        if (!containerRef.current) return;

        const containerStart = containerRef.current.getBoundingClientRect().top + window.scrollY;
        const relativeScroll = window.scrollY + stickyOffset - containerStart;

        // Find the greatest index whose offsetTop is <= relativeScroll
        const offsets = cardOffsetsRef.current;
        let found = -1;
        for (let i = 0; i < offsets.length; i++) {
          if (relativeScroll >= offsets[i]) found = i; else break;
        }
        if (found !== activeCardIndex) setActiveCardIndex(found);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [activeCardIndex]);

  return (
    <FeaturesWrapper>
      <FeaturesContainer ref={containerRef}>
        <SectionTitle>
          <TaglineWrapper>
            <Ellipse />
            <TaglineText>Features</TaglineText>
          </TaglineWrapper>
          <TitleContent>
            <MainTitle>Powerful event management</MainTitle>
            <SubTitle>Streamline your event workflow with integrated tools</SubTitle>
          </TitleContent>
        </SectionTitle>
        
        <CardsWrapper>
          {featureCards.map((card, index) => (
            <CardContainer 
              key={index} 
              delay={index}
              ref={el => cardRefs.current[index] = el}
              isActive={activeCardIndex === index}
              isStacked={activeCardIndex > index}
              isNext={activeCardIndex + 1 === index}
              stackLevel={activeCardIndex > index ? (activeCardIndex - index) : 0}
            >
              <FeatureCard 
                badge={card.badge}
                title={card.title}
                features={card.features}
                image={card.image}
              />
            </CardContainer>
          ))}
        </CardsWrapper>
      </FeaturesContainer>
    </FeaturesWrapper>
  );
};

const FeaturesWrapper = styled.section`
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 7rem 4rem;
  gap: 5rem;
  background: linear-gradient( #011C25 0%, #00C1DB 100%);
  
  @media (max-width: 768px) {
    padding: 4rem 2rem;
    border-radius: 2rem;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1200px;
  width: 100%;
`;

const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-bottom: 4rem;
`;

const TaglineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

const Ellipse = styled.div`
  height: 12px;
  width: 12px;
  background-color: #00C1DB;
  border-radius: 50%;
`;

const TaglineText = styled.span`
  text-align: left;
  vertical-align: top;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  line-height: 20px;
  color: #ffffff;
  font-weight: 500;
`;

const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
`;

const MainTitle = styled.h2`
  text-align: center;
  vertical-align: top;
  font-size: 48px;
  font-family: 'DM Sans', sans-serif;
  letter-spacing: -2%;
  line-height: 60px;
  color: #ffffff;
  
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 44px;
  }
`;

const SubTitle = styled.p`
  text-align: center;
  vertical-align: top;
  font-size: 18px;
  font-family: 'DM Sans', sans-serif;
  line-height: 28px;
  color: #ffffff;
  max-width: 600px;
`;

const CardsWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 300vh; /* Ensure enough scroll space for the sticky effect */
`;

const CardContainer = styled.div<{ 
  delay: number;
  isActive: boolean;
  isStacked: boolean;
  isNext: boolean;
  stackLevel: number; // how many cards under the active one
}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-top: ${props => 7.5 + props.delay * 1.25}rem;
  /* Keep all cards sticky at the same offset to avoid reflow jitter */
  position: sticky;
  top: 2px;
  /* Ensure later cards are always visually on top (last card highest) */
  z-index: ${props => 100 + props.delay};
  transform-origin: top center;
  will-change: transform;
  transform: ${props => {
    if (props.isActive) return 'scale(1)';
    if (props.isStacked) {
      const step = 2; // uniform vertical spacing per level (px)
      return `translateY(${-props.stackLevel * step}px) scale(0.95)`;
    }
    if (props.isNext) return 'translateY(10px)';
    return 'none';
  }};
  transition: transform 0.3s ease, top 0.3s ease;
  
  @media (max-width: 768px) {
    padding-top: ${props => 3 + props.delay * 0.5}rem;
    top: 10px;
  }
`;