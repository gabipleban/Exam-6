import { connect } from "react-redux";
import Form from "../components/Form";
import { add } from "../redux/actions";

const mapDispatchToProps = (dispatch) => ({
  addToDo: (title) => dispatch(add(title))
});

export default connect(null, mapDispatchToProps)(Form);