import {
  SET_INPUT,
  SET_SUBMIT,
  SET_DELETE,
  SET_FIGHTINGTEXT,
  SET_EDIT,
  CHANGE_TEXT,
  HANDLE_COMPLETE,
  TIME_CHECK
} from "../actions/actions";

const initialState = {
  isEdited: false,
  fightingText: "오늘의 당신을 응원합니다.",
  isTimeChecked: false,
  todoList: [
    {
      text: "앱 완성시키기 그래서 2개 3개 점점 쌓아 나가면 좋겠다",
      isComplete: false,
      totalTime: 0
    },
    {
      text: "구글에 올리기 또 누군가 다운받으면 더 기분 좋겠다",
      isComplete: false,
      totalTime: 0
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBMIT:
      return {
        ...state,
        todoList: [
          { text: action.text, isComplete: false, totalTime: 0 },
          ...state.todoList
        ]
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
    case SET_DELETE:
      return {
        ...state,
        todoList: [
          ...state.todoList.slice(0, action.index),
          ...state.todoList.slice(action.index + 1)
        ]
      };
    case CHANGE_TEXT:
      return {
        ...state,
        todoList: [
          ...state.todoList.slice(0, action.index),
          { ...state.todoList[action.index], text: action.text },
          ...state.todoList.slice(action.index + 1)
        ]
      };
    case HANDLE_COMPLETE:
      return {
        ...state,
        todoList: [
          ...state.todoList.slice(0, action.index),
          { ...state.todoList[action.index], isComplete: action.bool },
          ...state.todoList.slice(action.index + 1)
        ]
      };
    case TIME_CHECK:
      return {
        ...state,
        isTimeChecked: action.bool
      };
    default:
      return state;
  }
};

export default reducer;
