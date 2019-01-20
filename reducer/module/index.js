import {
  SET_INPUT,
  SET_SUBMIT,
  SET_DELETE,
  SET_FIGHTINGTEXT,
  SET_EDIT
} from "../actions/actions";

const initialState = {
  test: "test???????????",
  isEdited: false,
  fightingText: "오늘의 당신을 응원합니다.",
  todoList: [
    { text: "앱 완성시키기", timer: 30 },
    { text: "구글에 올리기", timer: 30 }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBMIT:
      return {
        ...state,
        todoList: [{ text: action.text, timer: 30 }, ...state.todoList]
      };
    case SET_FIGHTINGTEXT:
      return {
        ...state,
        fightingText: action.text
      };
    case SET_EDIT:
      return {
        ...state,
        isEdited: action.bool
      };
    case SET_SUBMIT:
      return {
        ...state,
        todoList: [{ text: action.text, timer: 30 }, ...state.todoList]
      };
    default:
      return state;
  }
};

export default reducer;
