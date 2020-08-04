import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import { logger } from "redux-logger";

import rootReducer from "../reducers";

export default function configureStore(initialState) {
  return createStore(
    rootReducer, initialState, applyMiddleware(ThunkMiddleware, logger)
  )
}
