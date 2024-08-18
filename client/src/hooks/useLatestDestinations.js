import { useEffect, useState } from "react";
import { getLatestDestination } from "../api/dest-api";


export function useLatestDestinations() {
    const [latestDest, setLatestDest] = useState([]);

    useEffect(() => {
        (async () => {
            const latestDestination = await getLatestDestination();

            setLatestDest(latestDestination);
        })();
    }, []);

    return [latestDest];
}