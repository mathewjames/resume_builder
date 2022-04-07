import { INCREMENT } from "../actions/types";
import { DECREMENT } from "../actions/types";

const initialState = {
  step: 1,
};

const buttonReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        step: state.step + 1,
      };
    case DECREMENT:
      return {
        ...state,
        step: state.step - 1,
      };
    default:
      return initialState;
  }
};

export default buttonReducer;
