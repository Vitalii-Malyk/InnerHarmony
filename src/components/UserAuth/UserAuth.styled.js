import styled from "styled-components";

export const StyledAuthWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

export const StyledAutLogin = styled.button`
  display: flex;
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

export const StyledAuthSignup = styled.button`
  display: flex;
  padding: 14px 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  background: #36a379;
  color: #fbfbfb;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.16px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #36a379;
  }
`;
