import axios from "axios";
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const getProduct = () => async (dispath) => {
  try {
    dispath({type: ALL_PRODUCT_REQUEST});
    const {data} = await axios.get("/api/v1/products");
    dispath({
        type: ALL_PRODUCT_SUCCESS,
        payload:data,
    })
  } catch (error) {
    dispath({
      type: ALL_PRODUCT_FAIL,
      payload:error.response.data.message,
    });
  }
};

//Clearin errors
export const clearErrors = () => async (dispath) => {
    dispath({type:CLEAR_ERRORS});
}
