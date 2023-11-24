import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../App";

export const ProtectedRoute = ({ redirectPath = "/signin" }) => {
  const { userData } = useUser();
  const isAllowed = userData;
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return <Outlet />;
};
