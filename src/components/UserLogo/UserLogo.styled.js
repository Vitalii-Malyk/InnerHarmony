import styled from "styled-components";

export const StyledLogoWrapper = styled.div`
  display: flex;
  gap: 28px;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

export const StyledLogoUserWrapper = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

export const StyledLogoName = styled.p`
  color: #191a15;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.16px;
`;

export const StyledLogoButton = styled.button`
  display: inline-flex;
  padding: 14px 39px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  border: 1px solid rgba(25, 26, 21, 0.2);
  color: #191a15;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.16px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: rgba(84, 190, 150, 0.2);
  }
`;
