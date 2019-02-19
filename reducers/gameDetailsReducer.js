import {
  GAME_DETAILS_REQUESTED,
  GAME_DETAILS_SUCCESS,
  GAME_DETAILS_ERROR
} from "../actions/gameDetails";

import {
  CHANGED_NAME,
  CHANGED_DESCRIPTION,
  CHANGED_RELEASED,
  CHANGED_RATING,
  EDIT_GAME_DETAILS,
  EDIT_GAME_SUCCESS,
  EDIT_FAILED
} from "../actions/gameEdit";

import moment from "moment";

const initialState = {
  isLoading: false,
  game: {},
  editError: false
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
        isLoading: false,
        editError: false
      };
    case EDIT_GAME_SUCCESS:
      return {
        ...state,
        game: action.game,
        editError: false
      };
    case CHANGED_NAME:
      return {
        ...state,
        game: Object.assign({}, state.game, { name: action.value }),
        editError: action.value === ""
      };
    case CHANGED_DESCRIPTION:
      return {
        ...state,
        game: Object.assign({}, state.game, { description: action.value }),
        editError: action.value === ""
      };
    case CHANGED_RELEASED:
      const stringifiedDate = moment(action.date).format("DD MMM YYYY");
      return {
        ...state,
        game: Object.assign({}, state.game, { released: stringifiedDate }),
        editError: action.date === ""
      };
    case CHANGED_RATING:
      return {
        ...state,
        game: Object.assign({}, state.game, { rating: action.value }),
        editError: action.value === ""
      };
    case EDIT_FAILED:
      return {
        ...state,
        editError: true
      };
    default:
      return state;
  }
};
