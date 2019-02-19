import React from "react";
import PropTypes from "prop-types";
import { AddLine } from "./AddLine";
import { AddDate } from "./AddDate";

export const AddSingleGameDetail = ({
  onAddName,
  onAddDescription,
  onAddReleased,
  onAddRating,
  game
}) => {
  return (
    <div>
      <AddLine
        label={"Name:"}
        value={game.name}
        placeholder={"Add name-required"}
        onChange={onAddName}
      />
      <AddLine
        label={"Description:"}
        value={game.description}
        placeholder={"Add description-required"}
        onChange={onAddDescription}
      />
      <AddDate
        label={"Released"}
        value={new Date(game.released)}
        onChange={onAddReleased}
      />
      <AddLine
        label={"Rating:"}
        value={game.rating}
        placeholder={"Add 1-5 rating-required"}
        onChange={onAddRating}
      />
    </div>
  );
};

AddSingleGameDetail.propTypes = {
  game: PropTypes.object.isRequired,
  onAddName: PropTypes.func.isRequired,
  onAddDescription: PropTypes.func.isRequired,
  onAddReleased: PropTypes.func.isRequired,
  onAddRating: PropTypes.func.isRequired
};
