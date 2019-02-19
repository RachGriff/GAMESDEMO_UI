import {
  GAME_DETAILS_REQUESTED,
  GAME_DETAILS_SUCCESS
} from "../actions/gameDetails";

import {
  CHANGED_NAME,
  CHANGED_DESCRIPTION,
  CHANGED_RELEASED,
  CHANGED_RATING,
  EDIT_GAME_DETAILS,
  EDIT_GAME_SUCCESS
} from "../actions/gameEdit";

const initialState = {
  isLoading: false,
  game: {}
};

export default (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case GAME_DETAILS_REQUESTED:
      return {
        ...state,
        game: {},
        isLoading: true
      };
    case GAME_DETAILS_SUCCESS:
      return {
        ...state,
        game: action.result,
        isLoading: false
      };
    case EDIT_GAME_SUCCESS:
      return {
        ...state,
        game: action.game
      };
    case CHANGED_NAME:
      return {
        ...state,
        game: Object.assign({}, state.game, { name: action.value })
      };
    case CHANGED_DESCRIPTION:
      return {
        ...state,
        game: Object.assign({}, state.game, { description: action.value })
      };
    case CHANGED_RATING:
      return {
        ...state,
        game: Object.assign({}, state.game, { rating: action.value })
      };
    default:
      return state;
  }
};
