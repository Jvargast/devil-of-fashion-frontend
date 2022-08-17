import thunk from "redux-thunk";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productDetailsReducer, productReducer } from "../reducers/productReducer";
import { userReducer } from "../reducers/userReducer";

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    user: userReducer
});

let initialState = {};


export const store = configureStore({
    middleware: [thunk],
    reducer:reducer,
    initialState
})