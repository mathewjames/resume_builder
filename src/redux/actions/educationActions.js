import { ADD_EDU, EDIT_EDU, DEL_EDU } from "./types";

export const addEdu = (edu) => {
  //console.log("edus", edu);
  return {
    type: ADD_EDU,
    payload: edu,
  };
};
export const editEdu = (newEdu, prevEdu) => {
  //console.log("Edus", Edu.company);
  return {
    type: EDIT_EDU,
    payload: [newEdu, prevEdu],
  };
};
export const delEdu = (edu) => {
  console.log("edus", edu);
  return {
    type: DEL_EDU,
    payload: edu,
  };
};
