import { post } from "./requester";

const baseUrl = 'users';

export const register = (email, password) => post(`${baseUrl}/register`, { email, password });

export const login = async (email, password) => {
    const result = await post(`${baseUrl}/login`, { email, password });
    return result;
};
