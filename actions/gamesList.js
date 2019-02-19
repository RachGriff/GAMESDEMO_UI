export const LIST_REQUESTED = "LIST_REQUESTED";
export const LIST_SUCCESS = "LIST_SUCCESS";

export const requestList = () => ({
  type: LIST_REQUESTED
});

export const listSuccess = results => ({
  type: LIST_SUCCESS,
  results: results
});

export const addGame = history => history.push(`/addGame`);
