import { ADD_WORK, EDIT_WORK, DEL_WORK } from "../actions/types";

const initialState = {
  works: {},
};

export const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORK:
      //console.log("works", state.works);

      return {
        ...state,
        works: {
          ...state.works,
          [action.payload.Company + action.payload.Designation]: action.payload,
        },
      };
    case EDIT_WORK:
      console.log("works", action.payload[0]);
      delete state.works[
        action.payload[1].Company + action.payload[1].Designation
      ];
      return {
        ...state,
        works: {
          ...state.works,
          [action.payload[0].Company + action.payload[0].Designation]:
            action.payload[0],
        },
      };
    case DEL_WORK:
      delete state.works[action.payload];
      return {
        ...state,
        works: {
          ...state.works,
        },
      };
    default:
      return state;
  }
};
