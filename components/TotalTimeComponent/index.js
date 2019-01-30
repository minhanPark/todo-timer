import TotalTime from "./Presenter";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  todoList: state.todoList
});

export default connect(mapStateToProps)(TotalTime);
