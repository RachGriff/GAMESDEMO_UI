import React from "react";
import PropTypes from "prop-types";
import { EditLine } from "./editLine";
import { EditDate } from "./editDate";

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
      <EditDate
        label={"Released"}
        value={new Date(game.released)}
        onChange={onChangeReleased}
      />
      <EditLine
        label={"Released"}
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
