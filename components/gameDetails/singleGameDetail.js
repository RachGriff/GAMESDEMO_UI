import React from "react";
import PropTypes from "prop-types";

export const SingleGameDetail = ({ game }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Released</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{game.name}</td>
          <td>{game.description}</td>
          <td>{game.released}</td>
          <td>{game.rating}</td>
        </tr>
      </tbody>
    </table>
  );
};

SingleGameDetail.propTypes = {
  game: PropTypes.object.isRequired
};
