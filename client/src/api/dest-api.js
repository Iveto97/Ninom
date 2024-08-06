import { get } from '../api/requester'

const url = 'http://localhost:3030/data/destinations'; 

export const getAll = async () => {
    const response = await get(url);
    return response;
    
}
