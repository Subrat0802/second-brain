import { useSelector } from "react-redux";
import type { RootState } from "../main";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    
  const token = useSelector((state: RootState) => state.authState.token);

  return token ? <Outlet /> : <Navigate to="/auth/signup" replace />;
};

export default ProtectedRoute;