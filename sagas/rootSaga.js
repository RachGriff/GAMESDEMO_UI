import gamesListSaga from "./gamesListSaga";
import gameDetailsSaga from "./gameDetailsSaga";
import gameDeleteSaga from "./gameDeleteSaga";
import gameEditSaga from "./gameEditSaga";
import { all } from "redux-saga/effects";

export default function*() {
  yield all([
    gamesListSaga(),
    gameDetailsSaga(),
    gameDeleteSaga(),
    gameEditSaga()
  ]);
}
