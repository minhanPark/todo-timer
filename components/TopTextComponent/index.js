import TopText from "./TopTextPresenter";
import { connect } from "react-redux";
import { setFightingText, setEdit } from "../../reducer/actions";

const mapStateToProps = state => ({
  fightingText: state.fightingText,
  isEdited: state.isEdited
});

const mapDispatchToProps = dispatch => ({
  setFightingText: text => dispatch(setFightingText(text)),
  setEdit: bool => dispatch(setEdit(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopText);
