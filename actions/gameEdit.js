export const EDIT_GAME_DETAILS = "EDIT_GAME_DETAILS";
export const EDIT_GAME_SUCCESS = "EDIT_GAME_SUCCESS";
export const CHANGED_NAME = "CHANGED_NAME";
export const CHANGED_DESCRIPTION = "CHANGED_DESCRIPTION";
export const CHANGED_RELEASED = "CHANGED_RELEASED";
export const CHANGED_RATING = "CHANGED_RATING";
export const EDIT_FAILED = "EDIT_FAILED";

export const editFailed = () => ({
  type: EDIT_FAILED
});
export const editSubmitted = game => ({
  type: EDIT_GAME_DETAILS,
  game
});

export const onEditSuccess = game => ({
  type: EDIT_GAME_SUCCESS,
  game
});

export const onCancel = history => history.push("/");

export const changingName = value => ({
  type: CHANGED_NAME,
  value
});
export const changingDescription = value => ({
  type: CHANGED_DESCRIPTION,
  value
});
export const changingReleased = value => ({
  type: CHANGED_RELEASED,
  value
});
export const changingRating = value => ({
  type: CHANGED_RATING,
  value
});
