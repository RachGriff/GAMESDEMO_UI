import GameEditForm from "./gameEditForm";
import { connect } from "react-redux";
import {
  onCancel,
  changingName,
  changingDescription,
  changingReleased,
  changingRating,
  editSubmitted,
  editFailed
} from "../../actions/gameEdit";

function mapStateToProps(state) {
  return {
    game: state.gameDetails.game,
    editError: state.gameDetails.editError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCancel: history => onCancel(history),
    onChangeName: e => dispatch(changingName(e)),
    onChangeDescription: e => dispatch(changingDescription(e)),
    onChangeReleased: e => dispatch(changingReleased(e)),
    onChangeRating: e => dispatch(changingRating(e)),
    onEditingGame: game => dispatch(editSubmitted(game))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameEditForm);
