import React, { useState } from 'react';
import styled from 'styled-components';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <FAQItemWrapper onClick={onClick}>
      <QuestionRow>
        <Question>{question}</Question>
        <ToggleIcon>{isOpen ? '×' : '+'}</ToggleIcon>
      </QuestionRow>
      {isOpen && <Answer>{answer}</Answer>}
    </FAQItemWrapper>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqItems = [
    {
      question: 'What is Typid Events?',
      answer: 'Typid Events is an all-in-one event management platform that lets you create, manage, and sell Tyckets for your events. You can track sales, manage attendees, create discount codes, and design your own Tycket Booth — all powered by Typid Pay.'
    },
    {
      question: 'What is Typid Pay?',
      answer: 'Typid Pay is our integrated payment processing system that ensures secure, fast, and transparent transactions for all your event ticket sales. It handles payment processing, refunds, and provides detailed financial reporting for your events.'
    },
    {
      question: 'How do I create an event?',
      answer: 'Creating an event is simple! Sign in to your Typid account, navigate to the Dashboard, click "Create Event," and follow the step-by-step process. You\'ll be able to add event details, create ticket tiers, customize your event page, and publish when you\'re ready.'
    },
    {
      question: 'Can I customize my Tycket Booth?',
      answer: 'Absolutely! Typid Events offers extensive customization options for your Tycket Booth. You can add your own branding, colors, and images that matches your brand identity.'
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <FAQWrapper>
      <FAQContainer>
        <FAQHeader>Frequently Asked Questions</FAQHeader>
        <FAQItems>
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              onClick={() => handleToggle(index)}
            />
          ))}
        </FAQItems>
      </FAQContainer>
    </FAQWrapper>
  );
};

const FAQWrapper = styled.section`
  padding: 5rem 4rem;
  background-color: #f8f9fb;
  
  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQHeader = styled.h2`
  font-family: 'DM Sans', sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 2.5rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 2rem;
  }
`;

const FAQItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItemWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Question = styled.h3`
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  margin: 0;
`;

const ToggleIcon = styled.span`
  font-size: 24px;
  color: #0a7a94;
  font-weight: bold;
`;

const Answer = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #4b5563;
  margin: 1rem 0 0 0;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
`;

export default FAQ;