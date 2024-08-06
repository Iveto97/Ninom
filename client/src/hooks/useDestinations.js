import { useState, useEffect } from "react";
import { getAll } from "../api/dest-api";

export function useGetAllDestinations() {

    const [destinations, setDestinations] = useState([]);
    
    useEffect(() => {
        (async () => {
            const response = await getAll();
            setDestinations(response);
        })();
    }, []);

    return [ destinations ];
}
