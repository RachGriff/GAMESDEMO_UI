import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const GamesListRow = ({ game }) => {
  return (
    <tr>
      <td>
        <Link to={"/gameDetails/" + game.id}>{game.name}</Link>
      </td>
      <td>{game.released}</td>
      <td>{game.rating}</td>
    </tr>
  );
};

GamesListRow.propTypes = {
  game: PropTypes.object.isRequired
};
