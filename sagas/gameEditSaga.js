import axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";
import {
  EDIT_GAME_DETAILS,
  editFailed,
  onEditSuccess
} from "../actions/gameEdit";
import { push } from "connected-react-router";
import { API_BASE_URL } from "../utils/config";

function* editGameDetails(action) {
  try {
    const editedGame = yield call(
      axios.put,
      `${API_BASE_URL}/${action.game.id}`,
      action.game
    );
    yield put(push("/"));
  } catch (error) {
    yield put(editFailed());
  }
}

export default function*() {
  yield takeLatest(EDIT_GAME_DETAILS, editGameDetails);
}
