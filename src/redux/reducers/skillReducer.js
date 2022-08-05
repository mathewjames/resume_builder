import { ADD_SKILL, DEL_SKILL } from "../actions/types";

const initialState = {
  skills: {
    Technical: [],
    NonTechnical: [],
  },
};

export const skillReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SKILL:
      console.log("skills", state);
      let techSkills = action.payload.Technical.split(",");
      let nonTechSkills = action.payload.NonTechnical.split(",");
      console.log("tech", techSkills);
      console.log("nontech", action.payload.NonTechnical);
      return {
        ...state,
        skills: {
          Technical: [...state.skills.Technical, ...techSkills],
          NonTechnical: [...state.skills.NonTechnical, ...nonTechSkills],
        },
      };

    case DEL_SKILL:
      delete state.skills[action.payload];
      return {
        ...state,
        skills: {
          ...state.skills,
        },
      };
    default:
      return state;
  }
};
