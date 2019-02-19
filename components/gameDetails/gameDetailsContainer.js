import { withRouter } from "react-router";
import GameDetails from "./gameDetails";
import { connect } from "react-redux";
import {
  detailsRequested,
  submitDelete,
  submitEdit,
  detailsError
} from "../../actions/gameDetails";

function mapStateToProps(state) {
  return {
    game: state.gameDetails.game
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoadGameDetail: id => {
      dispatch(detailsRequested(id));
    },
    onDeleteSubmitted: id => {
      dispatch(submitDelete(id));
    },
    onEditSubmitted: (history, id) => submitEdit(history, id),

    onDetailsError: history => detailsError(history)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GameDetails)
);
