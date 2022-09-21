import { createStore } from "redux";
import { BitconReducer } from "./Reducer";
export const store = createStore(BitconReducer)