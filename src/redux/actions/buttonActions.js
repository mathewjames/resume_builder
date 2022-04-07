import { INCREMENT, DECREMENT } from "./types";

export const nextPage = () => {
  return { type: INCREMENT };
};
export const prevPage = () => {
  return { type: DECREMENT };
};
