import axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";
import { EDIT_GAME_DETAILS, onEditSuccess } from "../actions/gameEdit";
import { push } from "connected-react-router";

function* editGameDetails(action) {
  yield put(push("/"));
}

export default function*() {
  yield takeLatest(EDIT_GAME_DETAILS, editGameDetails);
}
