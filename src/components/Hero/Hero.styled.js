import styled from "styled-components";

export const HeroWrap = styled.div`
  display: flex;
  margin: 78px 0 100px 0;
  gap: 125px;
`;

export const TitleStyle = styled.h1`
  width: 595px;
  font-size: 80px;
  font-weight: 600;
  line-height: 1.03;
`;

export const TitleAccent = styled.span`
  font-style: italic;
  color: var(--accent-color-text);
`;

export const Text = styled.p`
  width: 510px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 20px;
`;

export const StartedBtn = styled.button`
  width: 236px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  color: var(--white-color-text);
  background-color: var(--accent-color-normal);
  margin-top: 40px;
  border: none;
  &:hover,
  &:focus {
    background-color: var(--accent-color-hover);
  }
`;

export const HeroImg = styled.img`
  width: 464px;
  height: 526px;
  object-position: -290px;
  border-radius: 10px;
  object-fit: cover;
`;
