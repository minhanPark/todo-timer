import AddInput from "./Presenter";
import { connect } from "react-redux";
import { setSubmit } from "../../reducer/actions";

const mapDispatchToProps = dispatch => ({
  setSubmit: text => dispatch(setSubmit(text))
});

export default connect(
  null,
  mapDispatchToProps
)(AddInput);
