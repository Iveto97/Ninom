import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export default function RouteGuard() {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
}

// export default function RouteGuard({ children }) {

//     const { isAuthenticated } = useAuthContext();

//     if(!isAuthenticated) {
//         return <Navigate to={"/login"} />
//     }

//     return (
//         <>
//             { children }
//         </>
//     );
// }
