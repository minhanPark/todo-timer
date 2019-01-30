import { connect } from "react-redux";
import AppPresenter from "./Presenter";
import { timeCheck } from "../../reducer/actions";

const mapStateToProps = state => ({
  todoList: state.todoList,
  isTimeChecked: state.isTimeChecked,
  isTimerStarted: state.isTimerStarted
});

const mapDispatchToProps = dispatch => ({
  timeCheck: bool => dispatch(timeCheck(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppPresenter);
