import { del, get, post, put } from '../api/requester'

const destinations_URL = 'http://localhost:3030/data/destinations'; 

export const getAll = async () => {
    const response = await get(destinations_URL);
    return response;
    
};

export const getOne = async (destId) => {
    const params = new URLSearchParams({
        where: `_id="${destId}"`,
    });
    
    const response = await get(`${destinations_URL}?${params.toString()}`);
    
    return response;
};

export const createDest = (destData) => post(`${destinations_URL}`, destData);
    
export const deleteDest = (destId) => del(`${destinations_URL}/${destId}`);

export const updateDest = (destId, destData) => put(`${destinations_URL}/${destId}`, destData);

export const getLatestDestination = async () => {

    const result = await get(`${destinations_URL}?sortBy=_createdOn%20desc&pageSize=3`);

    const latestDest = Object.values(result);

    return latestDest;
}