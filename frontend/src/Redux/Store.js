import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import { ProductReducer } from "./Products/Reducer";

const rootReducer = combineReducers({
  Product: ProductReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
