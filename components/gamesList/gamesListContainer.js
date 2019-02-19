import React from "react";
import GamesList from "./gamesList";
import { connect } from "react-redux";
import { requestList, addGame } from "../../actions/gamesList";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    gamesList: state.gamesList.gamesList,
    isLoading: state.gamesList.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(requestList());
    },
    onAdd: history => addGame(history)
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GamesList)
);
