import "babel-regenerator-runtime";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import GameDetails from "./components/gameDetails/gameDetailsContainer";
import { Header } from "./shared/header/header";
import AddGame from "./components/addGame/addGameContainer";
import EditGameDetails from "./components/gameEdit/gameEditContainer";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
import createRootReducer from "./reducers";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router"; // react-router v4
import { createLogger } from "redux-logger";
import rootSaga from "./sagas/rootSaga";
const sagas = createSagaMiddleware();

export const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),
  {},
  compose(applyMiddleware(routerMiddleware(history), createLogger(), sagas))
);
sagas.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Header>
        <Route exact path="/" component={App} />
        <Route exact path="/addGame" component={AddGame} />
        <Route exact path="/gameDetails/:id" component={GameDetails} />
        <Route exact path="/gameDetails/:id/edit" component={EditGameDetails} />
      </Header>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);
