import { connect } from "react-redux";
import AppPresenter from "./Presenter";
import { timeCheck, resetTime } from "../../reducer/actions";

const mapStateToProps = state => ({
  todoList: state.todoList,
  isTimeChecked: state.isTimeChecked,
  isTimerStarted: state.isTimerStarted
});

const mapDispatchToProps = dispatch => ({
  timeCheck: bool => dispatch(timeCheck(bool)),
  resetTime: newArr => dispatch(resetTime(newArr))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppPresenter);
