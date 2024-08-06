
import { get } from "../api/requester";

const url = 'http://localhost:3030/data/about';

export const getAbout = async () => {
    const result = await get(url);
    
    return result[0];
    
}