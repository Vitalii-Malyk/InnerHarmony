import { Container } from "../Container/Container.styled";
import {
  Link,
  LogInBtn,
  LogoText,
  LogoTextAccent,
  RegistrationBtn,
  WrapperAuth,
  WrapperBar,
  WrapperLogo,
  WrapperNav,
} from "./AppBar.styled";

export const AppBarComponent = () => {
  return (
    <Container>
      <WrapperBar>
        <WrapperLogo>
          <LogoText>
            <LogoTextAccent>psychologists.</LogoTextAccent>
            services
          </LogoText>
        </WrapperLogo>
        <WrapperNav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/psychologists">Psychologists</Link>
          {/* <Link to="/favorites">Favorite</Link> */}
        </WrapperNav>
        <WrapperAuth>
          <LogInBtn>Log In</LogInBtn>
          <RegistrationBtn>Registration</RegistrationBtn>
        </WrapperAuth>
      </WrapperBar>
    </Container>
  );
};
