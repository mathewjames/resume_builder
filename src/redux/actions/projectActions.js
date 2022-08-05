import { ADD_PROJ, EDIT_PROJ, DEL_PROJ } from "./types";

export const addProj = (proj) => {
  console.log("projs", proj);
  return {
    type: ADD_PROJ,
    payload: proj,
  };
};
export const editProj = (newProj, prevProj) => {
  //console.log("Projs", Proj.company);
  return {
    type: EDIT_PROJ,
    payload: [newProj, prevProj],
  };
};
export const delProj = (proj) => {
  console.log("projs", proj);
  return {
    type: DEL_PROJ,
    payload: proj,
  };
};
