import axios from "axios";
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const getProduct = (keyword="", currentPage=1) => async (dispath) => {
  try {
    dispath({type: ALL_PRODUCT_REQUEST});
    let link =`/api/v1/products?keyword=${keyword}&page=${currentPage}`;
    const {data} = await axios.get(link);
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
//GET product details
export const getProductDetails = (id) => async (dispath) => {
  try {
    dispath({type: PRODUCT_DETAILS_REQUEST});
    const {data} = await axios.get(`/api/v1/product/${id}`);
    dispath({
        type: PRODUCT_DETAILS_SUCCESS,
        payload:data.product,
    })
  } catch (error) {
    dispath({
      type: PRODUCT_DETAILS_FAIL,
      payload:error.response.data.message,
    });
  }
};

//Clearin errors
export const clearErrors = () => async (dispath) => {
    dispath({type:CLEAR_ERRORS});
};
