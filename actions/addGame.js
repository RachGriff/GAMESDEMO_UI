export const ADD_GAME_DETAILS = "ADD_GAME_DETAILS";
export const ADD_GAME_SUCCESS = "ADD_GAME_SUCCESS";
export const ADDED_NAME = "ADDED_NAME";
export const ADDED_DESCRIPTION = "ADDED_DESCRIPTION";
export const ADDED_RELEASED = "ADDED_RELEASED";
export const ADDED_RATING = "ADDED_RATING";
export const ADD_FAILED = "ADD_FAILED";
export const ADD_GAME_START = "ADD_GAME_START";

export const addStart = () => ({
  type: ADD_GAME_START
});

export const addFailed = () => ({
  type: ADD_FAILED
});
export const addSubmitted = game => ({
  type: ADD_GAME_DETAILS,
  game
});

export const onAddSuccess = () => ({
  type: ADD_GAME_SUCCESS
});

export const onCancel = history => history.push("/");

export const addingName = value => ({
  type: ADDED_NAME,
  value
});
export const addingDescription = value => ({
  type: ADDED_DESCRIPTION,
  value
});
export const addingReleased = date => ({
  type: ADDED_RELEASED,
  date
});
export const addingRating = value => ({
  type: ADDED_RATING,
  value
});
