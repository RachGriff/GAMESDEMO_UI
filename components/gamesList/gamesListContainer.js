import React from "react";
import GamesList from "./gamesList";
import { connect } from "react-redux";
import { requestList } from "../../actions/gamesList";

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
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamesList);
