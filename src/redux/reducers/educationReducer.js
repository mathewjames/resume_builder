import { ADD_EDU, EDIT_EDU, DEL_EDU } from "../actions/types";

const initialState = {
  education: {},
};

export const educationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EDU:
      //console.log("education", state.education);

      return {
        ...state,
        education: {
          ...state.education,
          [action.payload.Institution + action.payload.Degree]: action.payload,
        },
      };
    case EDIT_EDU:
      console.log("education", action.payload[0]);
      delete state.education[
        action.payload[1].Institution + action.payload[1].Degree
      ];
      return {
        ...state,
        education: {
          ...state.education,
          [action.payload[0].Institution + action.payload[0].Degree]:
            action.payload[0],
        },
      };
    case DEL_EDU:
      delete state.education[action.payload];
      return {
        ...state,
        education: {
          ...state.education,
        },
      };
    default:
      return state;
  }
};
