import { combineReducers } from "redux";

import buttonReducer from "./buttonReducer";
import { contactReducer } from "./contactReducer";

export default combineReducers({
  buttonReducer,
  contactReducer,
});
