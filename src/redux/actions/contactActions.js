import {
  FNAME,
  LNAME,
  EMAIL,
  MOBILE,
  LINKEDIN,
  GITHUB,
  TWITTER,
  PORTFOLIO,
} from "./types";

export const fName = (name) => {
  return {
    type: FNAME,
    payload: name,
  };
};
export const lName = (name) => {
  return {
    type: LNAME,
    payload: name,
  };
};
export const email = (email) => {
  return {
    type: EMAIL,
    payload: email,
  };
};
export const mobile = (mobile) => {
  return {
    type: MOBILE,
    payload: mobile,
  };
};
export const linkedin = (linkedin) => {
  return {
    type: LINKEDIN,
    payload: linkedin,
  };
};
export const github = (github) => {
  return {
    type: GITHUB,
    payload: github,
  };
};
export const twitter = (twitter) => {
  return {
    type: TWITTER,
    payload: twitter,
  };
};
export const portfolio = (portfolio) => {
  return {
    type: PORTFOLIO,
    payload: portfolio,
  };
};
