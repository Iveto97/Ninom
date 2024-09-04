import { useEffect, useState } from "react";
import { getAll } from "../api/dest-api";
import { getLikes } from "../api/likes-api";


export function usePopularPosts() {
    const [allDest, setDest] = useState([]);
    const [destLike, setDestLike] = useState({});

    useEffect(() => {
        (async () => {
          const destinations = await getAll();
          
          setDest(destinations);
        })();
      }, []);

      useEffect(() => {
        (async () => {
          allDest?.map((dest) => {
            const totalLike = getLikes(dest._id);
    
            totalLike.then((value) => {
              setDestLike((oldState) => ({
                ...oldState,
                [dest.title]: value,
              }));
            });
          });
        })();
      }, [allDest]);

      const sortable = Object.entries(destLike)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);

      return sortable;
}