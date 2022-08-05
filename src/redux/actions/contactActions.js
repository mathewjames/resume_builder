import { CONTACT } from "./types";

export const addContact = (contact) => {
  return {
    type: CONTACT,
    payload: contact,
  };
};
