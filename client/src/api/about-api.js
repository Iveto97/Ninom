
import { get } from "../api/requester";


const url = 'https://ninom.onrender.com/data/about';

export const getAbout = async () => {
    const result = await get(url);
    
    return result[0];
    
}