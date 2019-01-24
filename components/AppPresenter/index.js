import { connect } from "react-redux";
import AppPresenter from "./Presenter";

const mapStateToProps = state => ({
  todoList: state.todoList
});

export default connect(mapStateToProps)(AppPresenter);
