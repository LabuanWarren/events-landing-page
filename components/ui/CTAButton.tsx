import React from 'react';
import styled from 'styled-components';

interface CTAButtonProps {
  label: string;
  href?: string;
  icon?: string | React.ReactNode; // 👈 can be image URL or React component
  hideIcon?: boolean;              // 👈 if true, no icon is shown
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  label,
  href = '#',
  icon = '/arrow-right.svg',
  hideIcon = false,
}) => {
  return (
    <ButtonRoot href={href} aria-label={label}>
      <TextWrapper>
        <ButtonLabel>{label}</ButtonLabel>
      </TextWrapper>

      {!hideIcon && (
        <IconWrapper>
          {typeof icon === 'string' ? (
            <img src={icon} alt="Icon" />
          ) : (
            icon
          )}
        </IconWrapper>
      )}
    </ButtonRoot>
  );
};

export const CTAButtonSmall: React.FC<CTAButtonProps> = ({
  label,
  href = '#',
  icon = '/arrow-right.svg',
  hideIcon = false,
}) => {
  return (
    <ButtonRootSmall href={href} aria-label={label}>
      <TextWrapperSmall>
        <ButtonLabel>{label}</ButtonLabel>
      </TextWrapperSmall>

      {!hideIcon && (
        <IconWrapperSmall>
          {typeof icon === 'string' ? (
            <img src={icon} alt="Icon" />
          ) : (
            icon
          )}
        </IconWrapperSmall>
      )}
    </ButtonRootSmall>
  );
};

// ===== Styles =====

const ButtonRoot = styled.a`
  border-radius: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(90deg, #16BCF9 0%, #1CDDF4 100%);
  color: #000000;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 6px 20px rgba(28, 221, 244, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(28, 221, 244, 0.45);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 15px rgba(28, 221, 244, 0.25);
  }
`;

const ButtonRootSmall = styled(ButtonRoot)`
  height: 46px;
  padding: 0 1rem;
`;

const TextWrapper = styled.div`
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
  line-height: 24px;
  color: #000000;
  font-weight: 600;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.625rem;

  img {
    height: 24px;
    width: 24px;
  }
`;

const TextWrapperSmall = styled(TextWrapper)`
  padding: 0.25rem 0;
`;

const IconWrapperSmall = styled(IconWrapper)`
  img {
    height: 20px;
    width: 20px;
  }
`;
