import React from "react";
import PropTypes from "prop-types";
import { AddSingleGameDetail } from "./addSingleGameDetail";

export default class AddGameForm extends React.Component {
  componentDidMount() {
    this.props.onLoad();
  }
  render() {
    const {
      onLoad,
      onCancel,
      history,
      onAddName,
      onAddDescription,
      onAddReleased,
      onAddRating,
      onAddingGame,
      addError,
      game
    } = this.props;
    return (
      <div>
        <div>Add your new game!</div>
        <AddSingleGameDetail
          game={game}
          onAddName={onAddName}
          onAddDescription={onAddDescription}
          onAddReleased={onAddReleased}
          onAddRating={onAddRating}
        />
        {addError && <div>Please enter all mandatory fields.</div>}
        <button
          className="btn"
          onClick={() => onAddingGame(game)}
          disabled={addError}
        >
          Add
        </button>
        <button className="btn" onClick={() => onCancel(history)}>
          Cancel
        </button>
      </div>
    );
  }
}
AddGameForm.propTypes = {
  onLoad: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onAddName: PropTypes.func.isRequired,
  onAddDescription: PropTypes.func.isRequired,
  onAddReleased: PropTypes.func.isRequired,
  onAddRating: PropTypes.func.isRequired,
  onAddingGame: PropTypes.func.isRequired
};
