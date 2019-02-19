import {
  ADDED_NAME,
  ADDED_DESCRIPTION,
  ADDED_RELEASED,
  ADDED_RATING,
  ADD_GAME_DETAILS,
  ADD_GAME_SUCCESS,
  ADD_FAILED,
  ADD_GAME_START
} from "../actions/addGame";

import moment from "moment";

const initialState = {
  isLoading: false,
  game: {
    name: "",
    description: "",
    released: moment().format("DD MMMM YYYY"),
    rating: 1
  },
  addError: false
};

export default (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case ADD_GAME_START:
      return initialState;
    case ADD_GAME_SUCCESS:
      return {
        ...state,
        game: action.game,
        addError: false
      };
    case ADDED_NAME:
      return {
        ...state,
        game: Object.assign({}, state.game, { name: action.value }),
        addError: action.value === ""
      };
    case ADDED_DESCRIPTION:
      return {
        ...state,
        game: Object.assign({}, state.game, { description: action.value }),
        addError: action.value === ""
      };
    case ADDED_RELEASED:
      const stringifiedDate = moment(action.date).format("DD MMMM YYYY");
      return {
        ...state,
        game: Object.assign({}, state.game, { released: stringifiedDate }),
        addError: action.date === ""
      };
    case ADDED_RATING:
      return {
        ...state,
        game: Object.assign({}, state.game, { rating: action.value }),
        addError: action.value === ""
      };
    case ADD_FAILED:
      return {
        ...state,
        addError: true
      };
    default:
      return state;
  }
};
