import { Navigate } from "react-router-dom";
export const ProtectedRoute = ({
  children,
  redirectPath = "/signin",
  isAllowed,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return children;
};
