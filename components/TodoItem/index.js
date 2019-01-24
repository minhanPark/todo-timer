import TodoItem from "./TodoItemPresenter";
import { connect } from "react-redux";
import { setDelete, changeText } from "../../reducer/actions";

const mapDispatchToProps = dispatch => ({
  setDelete: index => dispatch(setDelete(index)),
  changeText: (index, text) => dispatch(changeText(index, text))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoItem);
