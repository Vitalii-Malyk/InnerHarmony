import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "../../Page/Home/HomePage";
import Layout from "../Layout";
import Psychologists from "../../Page/Psychologists/PsychologistsPage";
import FavoritesPage from "../../Page/Favorites/FavoritesPage";
import PrivateRoute from "../../routes/PrivateRoute";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="psychologists" element={<Psychologists />} />
          <Route
            path="favorites"
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
