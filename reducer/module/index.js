import {
  SET_SUBMIT,
  SET_DELETE,
  SET_FIGHTINGTEXT,
  SET_EDIT,
  CHANGE_TEXT,
  HANDLE_COMPLETE,
  TIME_CHECK,
  START_TIMER,
  UPDATE_TIMER,
  RESET_TIME
} from "../actions/actions";

const initialState = {
  isEdited: false,
  fightingText: "당신을 응원합니다.",
  isTimeChecked: false,
  isTimerStarted: false,
  currentItem: 0,
  todoList: [
    {
      text: "꿈을 크게 가져라. 깨져도 그 조각이 크다.",
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
    case START_TIMER:
      return {
        ...state,
        currentItem: action.index,
        isTimerStarted: action.bool
      };
    case UPDATE_TIMER:
      return {
        ...state,
        todoList: [
          ...state.todoList.slice(0, action.index),
          {
            ...state.todoList[action.index],
            totalTime: state.todoList[action.index].totalTime + action.seconds
          },
          ...state.todoList.slice(action.index + 1)
        ]
      };
    case RESET_TIME:
      return {
        ...state,
        todoList: action.newArr
      };
    default:
      return state;
  }
};

export default reducer;
