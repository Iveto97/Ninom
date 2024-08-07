import { Navigate, useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";

export default function Logout() {
    const logout = useLogout();

   
            logout();
        return <Navigate to={'/'} />
};