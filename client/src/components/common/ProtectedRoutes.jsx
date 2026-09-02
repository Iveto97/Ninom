import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/TempContext";

export default function ProtectedRoutes() {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
}

