import { Route, Routes } from "react-router-dom";
import GlobalStyles from "../../GlobalStyles";
import HomePage from "../../Page/Home/HomePage";
import PsychologistsPage from "../../Page/Psychologists/PsychologistsPage";
import FavoritesPage from "../../Page/Favorites/FavoritesPage";
import Layout from "../Layout";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/psychologists" element={<PsychologistsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
