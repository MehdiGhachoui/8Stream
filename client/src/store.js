import { createStore , applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from "./reducers/main";

const initialState = {};



const store = createStore(rootReducer , initialState , composeWithDevTools(applyMiddleware(thunk)));

export const dispatch = store.dispatch ; 
export const subscribe = store.subscribe ; 
export const getState = store.getState ; 

export default store;