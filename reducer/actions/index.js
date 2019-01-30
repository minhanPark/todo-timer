import {
  SET_INPUT,
  SET_SUBMIT,
  SET_DELETE,
  SET_FIGHTINGTEXT,
  SET_EDIT,
  CHANGE_TEXT,
  HANDLE_COMPLETE,
  TIME_CHECK,
  START_TIMER,
  UPDATE_TIMER
} from "./actions";

export const setInput = () => ({
  type: SET_INPUT
});

export const setSubmit = text => ({
  type: SET_SUBMIT,
  text
});

export const setDelete = index => ({
  type: SET_DELETE,
  index
});

export const setFightingText = text => ({
  type: SET_FIGHTINGTEXT,
  text
});

export const setEdit = bool => ({
  type: SET_EDIT,
  bool
});

export const changeText = (index, text) => ({
  type: CHANGE_TEXT,
  index,
  text
});

export const handleComplete = (index, bool) => ({
  type: HANDLE_COMPLETE,
  index,
  bool
});

export const timeCheck = bool => ({
  type: TIME_CHECK,
  bool
});

export const startTimer = (index, bool) => ({
  type: START_TIMER,
  index,
  bool
});

export const updateTimer = (index, seconds) => ({
  type: UPDATE_TIMER,
  index,
  seconds
});
