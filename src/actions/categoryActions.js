import axios from "axios";
import {
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  ALL_CATEGORY_FAIL,
  CLEAR_ERRORS,
} from "../constants/categoryConstants";

export const getCategories = () => async (dispath) => {
  try {
    dispath({ type: ALL_CATEGORY_REQUEST });
    let link = `/api/v1/category/`;
    const { data } = await axios.get(link);
    dispath({
      type: ALL_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispath({
      type: ALL_CATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};
//GET product details
/* export const getProductDetails = (id) => async (dispath) => {
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
}; */

//Clearin errors
export const clearErrors = () => async (dispath) => {
  dispath({ type: CLEAR_ERRORS });
};
