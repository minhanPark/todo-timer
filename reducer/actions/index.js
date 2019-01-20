import {
  SET_INPUT,
  SET_SUBMIT,
  SET_DELETE,
  SET_FIGHTINGTEXT,
  SET_EDIT
} from "./actions";

export const setInput = () => ({
  type: SET_INPUT
});

export const setSubmit = text => ({
  type: SET_SUBMIT,
  text
});

export const setDelete = () => ({
  type: SET_DELETE
});

export const setFightingText = text => ({
  type: SET_FIGHTINGTEXT,
  text
});

export const setEdit = bool => ({
  type: SET_EDIT,
  bool
});
