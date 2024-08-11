import { useState, useEffect } from "react";
import { createDest, getAll, getOne } from "../api/dest-api";

export function useGetAllDestinations() {

    const [destinations, setDestinations] = useState([]);
    
    useEffect(() => {
        (async () => {
            const response = await getAll();
            setDestinations(response);
        })();
    }, []);

    return [ destinations ];
};

export function useGetOneDestination(destId) {

    const [ dest, setDest ] = useState({ 
        title: '',
        imageUrl: '',
        details: '',
    });

    useEffect(() => {
        (async () => {
            const result = await getOne(destId);
            
            setDest(result[0]);
        })();
    }, [ destId ]);

    return [ dest ];
};

export function useCreateDestination() {
    const destCreateHandler = (destData) => createDest(destData);

    return destCreateHandler;
}
