import axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";
import { LIST_REQUESTED, listSuccess } from "../actions/gamesList";

function* getGames() {
  const gamesArray = [
    {
      id: "1",
      name: "SuperDuperGame",
      description: "An action packed game!",
      released: "July 2008",
      rating: 1
    },
    {
      id: "2",
      name: "NextCoolGame",
      description: "Fantastic in game graphics.",
      released: "March 2017",
      rating: 2
    },
    {
      id: "3",
      name: "myBestGame",
      description: "An epic journey through a new world!",
      released: "May 2012",
      rating: 3
    }
  ];
  yield put(listSuccess(gamesArray));
}

export default function*() {
  yield takeLatest(LIST_REQUESTED, getGames);
}
