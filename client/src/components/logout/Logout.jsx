import { useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";

export default function Logout() {
    const logout = useLogout();
    const navigate = useNavigate();

    const initialValues = { email: '', psw: '' };

    const logoutHandler = async () => {
        try {
            logout();

                navigate('/');
            
        } catch (error) {
            console.log(error.message);
        };
    };
logoutHandler();

    // const { } = useForm( initialValues, logoutHandler );
};