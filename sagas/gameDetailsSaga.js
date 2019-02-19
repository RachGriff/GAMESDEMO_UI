import axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";
import {
  GAME_DETAILS_REQUESTED,
  detailsSuccess,
  detailsError
} from "../actions/gameDetails";
import { push } from "connected-react-router";
import { API_BASE_URL } from "../utils/config";

function* getGameDetails(action) {
  try {
    const game = yield call(axios.get, `${API_BASE_URL}/${action.id}`);
    yield put(detailsSuccess(game.data));
  } catch (error) {
    yield put(push("/"));
  }
}

export default function*() {
  yield takeLatest(GAME_DETAILS_REQUESTED, getGameDetails);
}
