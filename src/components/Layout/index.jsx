import { Outlet } from "react-router-dom";
import { Suspense } from "react";

// import { Loader } from "components/Loading/Loading";
import { AppBarComponent } from "../AppBar";
import { Container } from "../Container/Container.styled";

const Layout = () => {
  return (
    <>
      <AppBarComponent />
      <Container>
        <Suspense fallback={"loading...."}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
