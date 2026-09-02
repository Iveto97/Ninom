import { get, post } from "./requester";

const url = 'https://ninom.onrender.com/data/comments'; 

export const create = (destId, comment) => post(url, { destId, comment });

export const getAllComments = (destId) => {
    
    const params = new URLSearchParams({
        where: `destId="${destId}"`,
        load: `author=_ownerId:users`
    });

    const response = get(`${url}?${params.toString()}`);
    
    return response;
    
};
