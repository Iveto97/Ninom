import { get, post, put } from "./requester";

const destinations_URL = "http://localhost:3030/data/likes";

export const getLikes = async (destId) => {
  const response = await get(
    `${destinations_URL}?where=destId%3D%22${destId}%22&count`
  );

  return response;
};

export const updateLikes = async (destId) => {
  const result = await post(`${destinations_URL}`, { destId: destId });
  console.log(result);

  return result;
};

export const isLiked = async (destId, ownerId) => {
  const res = await get(
    `${destinations_URL}?where=destId%3D%22${destId}%22%20and%20_ownerId%3D%22${ownerId}%22&count`
  );

  return res;
};
