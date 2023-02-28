import { Container, NavBar } from "@/components";
import { Outlet } from "react-router-dom";

export const AppContent = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer></footer>
    </div>
  );
};
