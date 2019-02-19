import axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";
import { GAME_DETAILS_REQUESTED, detailsSuccess } from "../actions/gameDetails";

function* getGameDetails(action) {
  const game = {
    id: action.id,
    name: "myBestGame",
    description: "An epic journey through a new world!",
    released: "May 2012",
    rating: 3
  };
  yield put(detailsSuccess(game));
}

export default function*() {
  yield takeLatest(GAME_DETAILS_REQUESTED, getGameDetails);
}
