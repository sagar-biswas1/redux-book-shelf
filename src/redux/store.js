import { createStore, combineReducers } from "redux";
import bookReducer from "./reducers/bookReducers";
import { composeWithDevTools } from "redux-devtools-extension";
const combinedReducer = combineReducers({
  books: bookReducer,
});

const store = createStore(combinedReducer, composeWithDevTools());

export default store;
