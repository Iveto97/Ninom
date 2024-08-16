import { useEffect, useState } from "react";
import { getLikes, isLiked, updateLikes } from "../api/likes-api";

export function useGetLikes(destId) {
  const [likes, setLikes] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getLikes(destId);

      setLikes(result);
    })();
  }, [destId]);

  const setterFunc = (value) => {
    setLikes(value);
  }

  return [likes, setterFunc];
}

export function useUpdateLikes(destId) {
  const [updatedLikes, setUpdatedLikes] = useState(0);

  useEffect(() => {
    (async () => {
      const result = await updateLikes(destId);
      console.log(result);

      setUpdatedLikes(result);
    })();
  }, []);

  return [updatedLikes];
}

export function useGetUserLikes(destId, ownerId) {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    (async () => {
      const result = await isLiked(destId, ownerId);

      setLikes(result);
    })();
  }, [ownerId, destId]);

  return [likes];
}
