import axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";
import { DELETE_GAME_SUBMITTED } from "../actions/gameDetails";
import { push } from "connected-react-router";
import { API_BASE_URL } from "../utils/config";
function* deleteGameDetails(action) {
  const deletedGame = yield call(axios.delete, `${API_BASE_URL}/${action.id}`);
  yield put(push("/"));
}

export default function*() {
  yield takeLatest(DELETE_GAME_SUBMITTED, deleteGameDetails);
}
