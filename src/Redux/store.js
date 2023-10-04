import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import authReducer from "./Reducer/authReducer";
import reducer from "./Reducer/reducer";

const Rootreducer = combineReducers({
  authReducer,
  reducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  Rootreducer,
  composeEnhancers(applyMiddleware(thunk))
);
