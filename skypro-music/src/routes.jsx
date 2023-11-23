import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/Main/Main";
import { MyPlaylist } from "./pages/MyTracks/MyTracks";
import { NotFound } from "./pages/NotFound/NotFound";
import { Login } from "./pages/Login/Login";
import { CategoryOne } from "./pages/Categories/Categories";
//import { CategoryTwo } from "./pages/Categories/Categories2";
//import { CategoryThree } from "./pages/Categories/Categories3";
import { ProtectedRoute } from "./components/protected-route/protected";
import { AuthPage } from "./pages/Registr/Registr";
export const AppRoutes = ({
  user,
  setUser,
  isLoading,
  setLoading,
  currentTrack,
  setCurrentTrack,
  volume,
  setVolume,
}) => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/registr" element={<Login />} />
      <Route path="/signin" element={<AuthPage />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/myplaylist" element={<MyPlaylist />} />
        <Route
          path="/"
          element={
            <MainPage
              isLoading={isLoading}
              setLoading={setLoading}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
              volume={volume}
              setVolume={setVolume}
            />
          }
        />
        <Route path="/category/:id" element={<CategoryOne />} />

        {/* <Route path="/category2" element={<CategoryTwo />} />
      <Route path="/category3" element={<CategoryThree />} /> */}
      </Route>
    </Routes>
  );
};
