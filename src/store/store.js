import thunk from "redux-thunk";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "../reducers/productReducer";

const reducer = combineReducers({
    products: productReducer,
});

let initialState = {};


export const store = configureStore({
    middleware: [thunk],
    reducer:reducer,
    initialState
})