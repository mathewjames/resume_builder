import { ADD_SKILL, EDIT_SKILL, DEL_SKILL } from "./types";

export const addSkill = (skill) => {
  //console.log("skills", skill);
  return {
    type: ADD_SKILL,
    payload: skill,
  };
};
export const editSkill = (newSkill, prevSkill) => {
  //console.log("Skills", Skill.company);
  return {
    type: EDIT_SKILL,
    payload: [newSkill, prevSkill],
  };
};
export const delSkill = (skill) => {
  console.log("skills", skill);
  return {
    type: DEL_SKILL,
    payload: skill,
  };
};
