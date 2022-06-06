import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./reducers/userReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
    user : userReducer
})
const middlewares= [thunk];
const store = createStore(reducer, {}, applyMiddleware(...middlewares))
export default store;