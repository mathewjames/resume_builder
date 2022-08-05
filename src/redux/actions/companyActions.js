import { ADD_WORK, EDIT_WORK, DEL_WORK } from "./types";

export const addWork = (work) => {
  //console.log("works", work.company);
  return {
    type: ADD_WORK,
    payload: work,
  };
};
export const editWork = (newWork, prevWork) => {
  //console.log("works", work.company);
  return {
    type: EDIT_WORK,
    payload: [newWork, prevWork],
  };
};
export const delWork = (work) => {
  console.log("works", work);
  return {
    type: DEL_WORK,
    payload: work,
  };
};
