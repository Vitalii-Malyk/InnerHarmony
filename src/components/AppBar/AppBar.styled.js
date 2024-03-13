import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const WrapperBar = styled.div`
  display: flex;
  margin: 24px 0 24px 0;
`;
export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoText = styled.p`
  color: var(--primary-color-text);
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
`;
export const LogoTextAccent = styled.span`
  color: var(--accent-color-text);
`;

export const WrapperNav = styled.nav`
  display: flex;
  gap: 40px;
  margin-left: 130px;
`;

export const Link = styled(NavLink)`
  padding: 15px 0;
  text-decoration: none;
  color: var(--color-text-footer-header);
  text-decoration: none;
  position: relative;

  &.active::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 100%;
    width: 8px;
    height: 8px;
    background-color: var(--accent-color-normal);
  }
`;

export const WrapperAuth = styled.div`
  display: flex;
  align-items: center;
  margin-left: 343px;
  gap: 8px;
`;

export const LogInBtn = styled.button`
  width: 124px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border-color: var(--grey-color-border);
  background-color: white;
  &:hover,
  &:focus {
    background-color: var(--white-color);
  }
`;

export const RegistrationBtn = styled.button`
  width: 171px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  color: var(--white-color-text);
  background-color: var(--accent-color-normal);
  border: none;
  &:hover,
  &:focus {
    background-color: var(--accent-color-hover);
  }
`;
