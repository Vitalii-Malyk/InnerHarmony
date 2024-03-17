import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  gap: 40px;
  margin-left: ${({ loggedIn }) => (loggedIn ? "0" : "-130px")};
`;

export const LinkItem = styled(NavLink)`
  position: relative;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25px;
  color: var(--secondary-color-black);

  &:hover::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 24px;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--primary-color-green);
  }
`;
