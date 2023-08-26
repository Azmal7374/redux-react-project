import { applyMiddleware, createStore } from "redux";
import todoReducres from "./services/reducers/TodoReducers";
import thunk from "redux-thunk";

const todoStore = createStore(todoReducres, applyMiddleware(thunk));


export default  todoStore;