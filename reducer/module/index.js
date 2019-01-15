import { SET_INPUT, SET_SUBMIT, SET_DELETE } from "../actions/actions";

const initialState = {
  test: "test?",
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
    default:
      return state;
  }
};

export default reducer;
