import axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";
import { DELETE_GAME_SUBMITTED } from "../actions/gameDetails";
import { push } from "connected-react-router";

function* deleteGameDetails() {
  yield put(push("/"));
}

export default function*() {
  yield takeLatest(DELETE_GAME_SUBMITTED, deleteGameDetails);
}
