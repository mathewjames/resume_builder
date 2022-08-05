import { ADD_PROJ, EDIT_PROJ, DEL_PROJ } from "../actions/types";

const initialState = {
  projects: {},
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJ:
      //console.log("projs", state.projs);

      return {
        ...state,
        projects: {
          ...state.projects,
          [action.payload.Name]: action.payload,
        },
      };
    case EDIT_PROJ:
      console.log("projs", action.payload[0]);
      delete state.projects[action.payload[1].Name];
      return {
        ...state,
        projects: {
          ...state.projects,
          [action.payload[0].Name]: action.payload[0],
        },
      };
    case DEL_PROJ:
      delete state.projects[action.payload];
      return {
        ...state,
        projects: {
          ...state.projects,
        },
      };
    default:
      return state;
  }
};
