import { get } from '../api/requester'

const destinations_URL = 'http://localhost:3030/data/destinations'; 
const oneDestInfo_URL = 'http://localhost:3030/data/details';

export const getAll = async () => {
    const response = await get(destinations_URL);
    return response;
    
};

export const getOne = async (destId) => {
    const params = new URLSearchParams({
        where: `destId="${destId}"`,
        // load: `author=_ownerId:users`
    });
    const response = await get(`${oneDestInfo_URL}?${params.toString()}`);
    
    return response;
}
    

