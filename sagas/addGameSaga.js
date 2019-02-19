import axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";
import { ADD_GAME_DETAILS, addFailed, onAddSuccess } from "../actions/addGame";
import { push } from "connected-react-router";
import { API_BASE_URL } from "../utils/config";

function* addGameDetails(action) {
  try {
    const g = action.game;
    const addedGame = yield call(
      axios.post,
      `${API_BASE_URL}?name=${g.name}&description=${g.description}&released=${
        g.released
      }&rating=${g.rating}`
    );
    yield put(push("/"));
  } catch (error) {
    yield put(addFailed());
  }
}

export default function*() {
  yield takeLatest(ADD_GAME_DETAILS, addGameDetails);
}
