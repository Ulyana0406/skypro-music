import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/Main/Main";
import { MyPlaylist } from "./pages/MyTracks/MyTracks";
import { NotFound } from "./pages/NotFound/NotFound";
import { Login } from "./pages/Login/Login";
import { CategoryOne } from "./pages/Categories/Categories";
import { CategoryTwo } from "./pages/Categories/Categories2";
import { CategoryThree } from "./pages/Categories/Categories3";
import { ProtectedRoute } from "./components/protected-route/protected";
import { Registr } from "./pages/Registr/Registr";
export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/myplaylist" element={<MyPlaylist />} />
      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <MainPage />
          </ProtectedRoute>
        }
      />
      <Route path="/signin" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/category1" element={<CategoryOne />} />
      <Route path="/category2" element={<CategoryTwo />} />
      <Route path="/category3" element={<CategoryThree />} />
      <Route path="/registr" element={<Registr />} />
    </Routes>
  );
};
