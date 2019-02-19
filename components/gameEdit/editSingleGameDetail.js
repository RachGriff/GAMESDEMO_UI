import React from "react";
import PropTypes from "prop-types";
import { EditLine } from "./editLine";

export const EditSingleGameDetail = ({
  game,
  onChangeName,
  onChangeDescription,
  onChangeReleased,
  onChangeRating
}) => {
  return (
    <div>
      <EditLine label={"Name:"} value={game.name} onChange={onChangeName} />
      <EditLine
        label={"Description:"}
        value={game.description}
        onChange={onChangeDescription}
      />
      <EditLine
        label={"Rating:"}
        value={game.rating}
        onChange={onChangeRating}
      />
    </div>
  );
};

EditSingleGameDetail.propTypes = {
  game: PropTypes.object.isRequired
};
