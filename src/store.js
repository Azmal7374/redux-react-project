import { createStore } from "redux";
import counterReducers from "./services/reducers/CounterReducers";

const store = createStore(counterReducers);


export default  store;