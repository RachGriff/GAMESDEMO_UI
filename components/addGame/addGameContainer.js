import AddGameForm from "./addGameForm";
import { connect } from "react-redux";
import {
  onCancel,
  addFailed,
  addSubmitted,
  onAddSuccess,
  addingName,
  addingDescription,
  addingReleased,
  addingRating,
  addStart
} from "../../actions/addGame";

function mapStateToProps(state) {
  return {
    game: state.addGame.game,
    addError: state.addGame.addError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(addStart()),
    onCancel: history => onCancel(history),
    onAddName: e => dispatch(addingName(e)),
    onAddDescription: e => dispatch(addingDescription(e)),
    onAddReleased: e => dispatch(addingReleased(e)),
    onAddRating: e => dispatch(addingRating(e)),
    onAddingGame: game => dispatch(addSubmitted(game))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddGameForm);
