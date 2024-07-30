import { useContext } from "react";
import { AuthContext } from '../context/authContext';
import { register } from "../utils/authApi";


export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const result = await register(email, password);

        changeAuthState(result);
        return result;
    };

    return registerHandler;
};