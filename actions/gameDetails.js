export const GAME_DETAILS_REQUESTED = "GAME_DETAILS_REQUESTED";
export const GAME_DETAILS_SUCCESS = "GAME_DETAILS_SUCCESS";
export const DELETE_GAME_SUBMITTED = "DELETE_GAME_SUBMITTED";

export const detailsRequested = id => ({
  type: GAME_DETAILS_REQUESTED,
  id
});

export const detailsSuccess = result => ({
  type: GAME_DETAILS_SUCCESS,
  result
});

export const submitDelete = id => ({
  type: DELETE_GAME_SUBMITTED,
  id
});

export const submitEdit = (history, id) => {
  history.push(`/gameDetails/${id}/edit`);
};
