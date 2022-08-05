import { combineReducers } from "redux";

import buttonReducer from "./buttonReducer";
import contactReducer from "./contactReducer";
import { companyReducer } from "./companyReducer";
import { educationReducer } from "./educationReducer";
import { projectReducer } from "./projectReducer";
import { skillReducer } from "./skillReducer";

export default combineReducers({
  buttonReducer,
  contactReducer,
  companyReducer,
  educationReducer,
  projectReducer,
  skillReducer,
});
