import { useContext } from "react";

import { AuthContext, useAuthContext } from '../context/AuthContext';
import { register, login, logout } from "../api/authApi";


export const useRegister = () => {
    const { changeAuthState } = useAuthContext();

    const registerHandler = async (email, password) => {
        const result = await register(email, password);

        changeAuthState(result);
        return result;
    };

    return registerHandler;
};

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();

    const loginHandler = async (email, password) => {
        const result = await login(email, password);
        
        changeAuthState(result);
        return result;
    };
    return loginHandler;
}

export const useLogout = () => {
    const { logout:localLogout } = useAuthContext();
    const logoutHandler = async () => {
        const result = await logout();
        localLogout();
    }
    return logoutHandler;
}