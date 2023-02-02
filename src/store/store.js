import thunk from "redux-thunk";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productDetailsReducer, productReducer } from "../reducers/productReducer";
import { forgotPasswordReducer, profileReducer, userReducer } from "../reducers/userReducer";
import { categoryReducer } from "../reducers/categoryReducer";

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    categories: categoryReducer,
    profile:profileReducer,
    forgotPassword: forgotPasswordReducer,
});

let initialState = {};


export const store = configureStore({
    middleware: [thunk],
    reducer:reducer,
    initialState
})