import TodoItem from "./TodoItemPresenter";
import { connect } from "react-redux";
import {
  setDelete,
  changeText,
  handleComplete,
  startTimer
} from "../../reducer/actions";

const mapDispatchToProps = dispatch => ({
  setDelete: index => dispatch(setDelete(index)),
  changeText: (index, text) => dispatch(changeText(index, text)),
  handleComplete: (index, bool) => dispatch(handleComplete(index, bool)),
  startTimer: (index, bool) => dispatch(startTimer(index, bool))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoItem);
