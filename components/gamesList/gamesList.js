import React from "react";
import PropTypes from "prop-types";
import { GamesListTable } from "./gamesListTable";
import { push, replace } from "connected-react-router";

export default class GamesList extends React.Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { gamesList, isLoading, onAdd, history } = this.props;
    return (
      <div>
        <h2>Our Top Games</h2>
        <GamesListTable gamesList={gamesList} isLoading={isLoading} />
        <button className="btn" value="Add Game" onClick={() => onAdd(history)}>
          Add New Game
        </button>
      </div>
    );
  }
}

GamesList.propTypes = {
  gamesList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired
};
