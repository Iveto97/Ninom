import { useContext } from "react";

import { AuthContext } from '../context/authContext';
import { register, login, logout } from "../utils/authApi";


export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const result = await register(email, password);

        changeAuthState(result);
        return result;
    };

    return registerHandler;
};

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const result = await login(email, password);
        
        changeAuthState(result);
        return result;
    };
    return loginHandler;
}

export const useLogout = () => {
    const logoutHandler = async () => {
        const result = await logout();
        return result;
    }
    return logoutHandler;
}