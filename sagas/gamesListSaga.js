import axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";
import { LIST_REQUESTED, listSuccess } from "../actions/gamesList";
import { API_BASE_URL } from "../utils/config";

function* getGames() {
  const games = yield call(axios.get, API_BASE_URL);
  yield put(listSuccess(games.data));
}

export default function*() {
  yield takeLatest(LIST_REQUESTED, getGames);
}
