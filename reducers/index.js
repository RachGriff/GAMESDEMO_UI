import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import gamesListReducer from "./gamesListReducer";
import gameDetailReducer from "./gameDetailsReducer";
import addGameReducer from "./addGameReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    gamesList: gamesListReducer,
    gameDetails: gameDetailReducer,
    addGame: addGameReducer
  });
