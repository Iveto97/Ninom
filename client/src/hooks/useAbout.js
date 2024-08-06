import { useEffect, useState } from "react";

import { getAbout } from "../api/about-api";


export function useGetInfo() {
    const [about, setAbout] = useState({});

    useEffect(() => {
      (async() => {
          const request = await getAbout();
          
          setAbout(request);
        }
      )();
    }, []);

    return [ about ];
};
