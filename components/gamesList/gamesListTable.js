import React from "react";
import PropTypes from "prop-types";
import { GamesListRow } from "./gamesListRow";

export const GamesListTable = ({ gamesList }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Released</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {gamesList.length > 0 &&
          gamesList.map(g => <GamesListRow key={g.id} game={g} />)}
        {gamesList.length <= 0 && (
          <tr className="NoGamesMsg">
            <td colSpan="3">
              "There are no games available yet - why not add one?"
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
GamesListTable.propTypes = {
  gamesList: PropTypes.array.isRequired
};
