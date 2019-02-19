import React from "react";
import PropTypes from "prop-types";
import { GamesListTable } from "./gamesListTable";

export default class GamesList extends React.Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { gamesList, isLoading } = this.props;
    return (
      <div>
        <h2>Our Top Games</h2>
        <GamesListTable gamesList={gamesList} isLoading={isLoading} />
      </div>
    );
  }
}

GamesList.propTypes = {
  gamesList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired
};
