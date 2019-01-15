import { connect } from "react-redux";
import AppPresenter from "./Presenter";

const mapStateToProps = state => ({
  test: state.test
});

export default connect(mapStateToProps)(AppPresenter);
