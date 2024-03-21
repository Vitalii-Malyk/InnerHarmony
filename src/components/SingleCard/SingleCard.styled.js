import styled from "styled-components";

export const Item = styled.li`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  padding: 24px;
  display: flex;
  gap: 24px;

  @media only screen and (max-width: 930px) {
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    flex-direction: column;
    width: clamp(250px, 95%, 765px);
  }

  @media only screen and (max-width: 375px) {
  }
`;

export const Statistics = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  line-height: 1.5em;

  & span {
    color: ${({ theme }) => theme.colors.green};
  }
  @media only screen and (max-width: 768px) {
    position: static;
  }
  @media only screen and (max-width: 375px) {
    top: 10px;
    right: 10px;
    position: static;
  }
`;

export const Rating = styled.p`
  margin-left: 8px;
  margin-right: 16px;

  @media only screen and (max-width: 375px) {
    margin-left: 4px;
    margin-right: 8px;
  }
`;

export const Price = styled.p`
  margin-left: 16px;
  margin-right: 28px;

  @media only screen and (max-width: 375px) {
    margin-left: 8px;
    margin-right: 15px;
  }
`;

export const BtnFav = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  & svg {
    width: 26px;
    height: 26px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  min-width: 120px;
  width: auto;
  height: 120px;
  border-radius: 30px;
  border: 2px solid rgba(84, 190, 150, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    min-width: 96px;
    width: auto;
    height: 96px;
    border-radius: 15px;
    object-fit: cover;
  }

  & svg {
    position: absolute;
    top: 9px;
    right: 14px;
    fill: ${({ theme }) => theme.colors.green};
  }
  @media only screen and (max-width: 768px) {
    max-width: 100px;
    margin-top: 10px;
  }

  @media only screen and (max-width: 375px) {
    max-width: 100px;
  }
`;

export const Job = styled.p`
  color: ${({ theme }) => theme.colors.boldGray};
  font-weight: 500;
  line-height: 1.5em;
  margin-bottom: 8px;
`;

export const Name = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  font-weight: 500;
  line-height: 1em;
  margin-bottom: 24px;
`;

export const Features = styled.ul`
  display: flex;
  gap: 8px 4px;
  flex-wrap: wrap;
  margin-bottom: 24px;

  & li {
    padding: 8px 16px;
    background: ${({ theme }) => theme.colors.backgroundGray};
    border-radius: 24px;
    font-weight: 500;
    line-height: 1.5em;
    color: ${({ theme }) => theme.colors.boldGray};

    & span {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 400;
  line-height: 1.25em;
  margin-bottom: 14px;
`;

export const ReadMoreBtn = styled.button`
  color: ${({ theme }) => theme.colors.black};
  background: transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5em;
  text-decoration-line: underline;
`;

export const PopUpMessage = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;
