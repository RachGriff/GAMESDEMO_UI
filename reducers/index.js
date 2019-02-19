import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import gamesListReducer from "./gamesListReducer";
import gameDetailReducer from "./gameDetailsReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    gamesList: gamesListReducer,
    gameDetails: gameDetailReducer
  });
