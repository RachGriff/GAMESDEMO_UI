import { LIST_REQUESTED, LIST_SUCCESS } from "../actions/gamesList";

const initialState = {
  isLoading: false,
  gamesList: []
};

export default (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case LIST_REQUESTED:
      return {
        ...state,
        gamesList: [],
        isLoading: true
      };
    case LIST_SUCCESS:
      return {
        ...state,
        gamesList: action.results,
        isLoading: false
      };
    default:
      return state;
  }
};
