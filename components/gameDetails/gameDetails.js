import React from "react";
import PropTypes from "prop-types";
import { SingleGameDetail } from "./singleGameDetail";

export default class GameDetails extends React.Component {
  componentDidMount() {
    this.props.onLoadGameDetail(this.props.match.params.id);
  }
  render() {
    const { game, onEditSubmitted, onDeleteSubmitted, history } = this.props;
    return (
      <div>
        <div>GameDetails for {game.name}</div>
        <SingleGameDetail game={game} />
        <button
          className="Editbtn"
          value="Edit Game"
          onClick={() => onEditSubmitted(history, game.id)}
        >
          Edit Game
        </button>
        <button
          className="Deletebtn"
          value="Delete Game"
          onClick={() => {
            onDeleteSubmitted(game.id);
          }}
        >
          Delete Game
        </button>
      </div>
    );
  }
}
GameDetails.propTypes = {
  game: PropTypes.object.isRequired,
  onEditSubmitted: PropTypes.func.isRequired,
  onDeleteSubmitted: PropTypes.func.isRequired
};
