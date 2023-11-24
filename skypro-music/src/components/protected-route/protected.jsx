import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/signin" }) => {
  const isAllowed = Boolean(localStorage.getItem("userData"));
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return <Outlet />;
};
