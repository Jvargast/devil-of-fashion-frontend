/* import thunk from "redux-thunk"; */
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productDetailsReducer, productReducer } from "../reducers/productReducer";
import { forgotPasswordReducer, profileReducer, userReducer } from "../reducers/userReducer";
import { categoryReducer } from "../reducers/categoryReducer";
import { cartReducer } from "../reducers/cartReducer";

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    categories: categoryReducer,
    profile:profileReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    
});

let initialState = {
    cart: {
      cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
       shippingInfo: localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {},
    },
  };

export const store = configureStore({
    /* middleware: [thunk], */
    reducer:reducer,
    initialState
});