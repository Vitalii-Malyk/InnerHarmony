import { useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "../Modal";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";
import { removeUser } from "../../redux/auth/slice";
import sprite from "../../helpers/icons/sprite.svg";
import { useAuth } from "../../hooks/useAuth";

import {
  AccountBox,
  AccountInfo,
  AuthBox,
  LogoutBtn,
  NameNavLink,
  NavBar,
  NavBarLink,
  SignInBtn,
  SignUpBtn,
  Span,
  StyledContainer,
  StyledHeader,
  UserIcon,
  UserName,
} from "./Header.styled";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth, name } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };
  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };
  const handleLogout = () => {
    dispatch(removeUser());
  };

  return (
    <>
      <StyledHeader>
        <StyledContainer>
          <NameNavLink to="/">
            <Span>psychologists.</Span>services
          </NameNavLink>
          <NavBar>
            <NavBarLink to="/">Home</NavBarLink>
            <NavBarLink to="/psychologists">Psychologists</NavBarLink>
            {!isAuth && <NavBarLink to="/favorites">Favorites</NavBarLink>}
          </NavBar>
          {isAuth ? (
            <AuthBox>
              <SignInBtn type="button" onClick={handleOpenLoginModal}>
                Log in
              </SignInBtn>
              <SignUpBtn type="button" onClick={handleOpenRegisterModal}>
                Registration
              </SignUpBtn>
            </AuthBox>
          ) : (
            <AccountBox>
              <AccountInfo>
                <UserIcon>
                  <svg width="24" height="24">
                    <use href={`${sprite}#user`} />
                  </svg>
                </UserIcon>
                <UserName>{name}</UserName>
              </AccountInfo>
              <LogoutBtn type="button" onClick={handleLogout}>
                Log out
              </LogoutBtn>
            </AccountBox>
          )}
        </StyledContainer>
      </StyledHeader>
      <Modal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal}>
        <LoginForm closeModal={handleCloseLoginModal} />
      </Modal>
      <Modal isOpen={isRegisterModalOpen} onClose={handleCloseRegisterModal}>
        <RegisterForm closeModal={handleCloseRegisterModal} />
      </Modal>
    </>
  );
};

export default Header;
