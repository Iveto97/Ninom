import { useEffect, useState } from "react";

import { useGetLikes, useGetUserLikes } from "../../hooks/useLikes";
import { useAuthContext } from "../../context/AuthContext";

import { updateLikes } from "../../api/likes-api";

export default function DestinationLikes({ destinationId }) {
  const { userId } = useAuthContext();

  const [likes, setterFunc] = useGetLikes(destinationId);
  const [isLiked] = useGetUserLikes(destinationId, userId);
  const [disable, setDisable] = useState(false);
  const [like, setLike] = useState("Like");

  useEffect(() => {
    if (isLiked) {
      setDisable(true);
    }
  }, [isLiked]);

  const incrementClickHandle = async () => {
    const result = await updateLikes(destinationId);
    console.log(result);

    setterFunc((n) => n + 1);

    setDisable(true);
    setLike("Liked");
  };

  return (
    <button onClick={incrementClickHandle} disabled={disable}>
      {isLiked ? `Liked` : `${like}`}
    </button>
  );
}
