import React from "react";
import PropTypes from "prop-types";
import { EditSingleGameDetail } from "./editSingleGameDetail";

export default class GameEditForm extends React.Component {
  render() {
    const {
      game,
      onCancel,
      history,
      onChangeName,
      onChangeDescription,
      onChangeReleased,
      onChangeRating,
      onEditingGame,
      editError
    } = this.props;
    return (
      <div>
        <div>EDIT</div>
        <EditSingleGameDetail
          game={game}
          onChangeName={onChangeName}
          onChangeDescription={onChangeDescription}
          onChangeReleased={onChangeReleased}
          onChangeRating={onChangeRating}
        />
        {editError && <div>Please enter all mandatory fields.</div>}
        <button
          className="btn"
          onClick={() => onEditingGame(game)}
          disabled={editError}
        >
          Update
        </button>
        <button className="btn" onClick={() => onCancel(history)}>
          Cancel
        </button>
      </div>
    );
  }
}
GameEditForm.propTypes = {
  game: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired
};
