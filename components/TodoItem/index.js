import TodoItem from "./TodoItemPresenter";
import { connect } from "react-redux";
import { setDelete } from "../../reducer/actions";

const mapDispatchToProps = dispatch => ({
  setDelete: index => dispatch(setDelete(index))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoItem);
