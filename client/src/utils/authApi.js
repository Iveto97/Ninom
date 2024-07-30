import { post } from "./requester";

const baseUrl = 'http://localhost:3030/users';

export const register = (email, password) => post(`${baseUrl}/register`, { email, password });