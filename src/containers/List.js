import { connect } from "react-redux";
import List from "../components/List";
import { remove } from "../redux/actions";

const mapStateToProps = (state, { filter }) => {
  let items;

  if (filter && ["done", "not-done"].includes(filter)) {
    items = state.todos.filter(({ done }) => (filter === "done" && done) || (filter === "not-done" && !done))
  } else {
    items = state.todos;
  }

  return {
    items
  }
};

const mapDispatchToProps = (dispatch) => ({
  
  remove: (title) => dispatch(remove(title)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
