import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/UserAuthContext";
import Loading from "../pages/Shared_components/Loading";

const RequiredAuth = ({ children }) => {
  const { userInfo, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <Loading />;
  }

  if (!userInfo) {
    return <Navigate to="/signIn" state={{ from: location }} replace />;
  }
  
  return children;
};

export default RequiredAuth;
