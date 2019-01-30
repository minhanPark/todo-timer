import Timer from "./Presenter";
import { connect } from "react-redux";
import { startTimer, updateTimer } from "../../reducer/actions";

const mapStateToProps = state => ({
  currentItem: state.currentItem
});

const mapDispatchToProps = dispatch => ({
  startTimer: (index, bool) => dispatch(startTimer(index, bool)),
  updateTimer: (index, seconds) => dispatch(updateTimer(index, seconds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
