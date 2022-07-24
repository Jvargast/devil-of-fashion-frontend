import thunk from "redux-thunk";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productDetailsReducer, productReducer } from "../reducers/productReducer";

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer
});

let initialState = {};


export const store = configureStore({
    middleware: [thunk],
    reducer:reducer,
    initialState
})