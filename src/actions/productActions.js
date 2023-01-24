import axios from "axios";
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
  FILTERED_PRODUCTS_REQUEST,
  FILTERED_PRODUCTS,
  FILTERED_PRODUCTS_FAIL,
  SORT_PRODUCTS_REQUEST,
  SORT_PRODUCTS_SUCCESS,
  SORT_PRODUCTS_FAIL,
} from "../constants/productConstants";

export const getProduct =
  (keyword = "", currentPage = 1, limit, cat) =>
  async (dispath) => {
    try {
      dispath({ type: ALL_PRODUCT_REQUEST });
      let link = `/api/v1/productos?keyword=${keyword}&page=${currentPage}&limit=${limit}`;
      const { data } = await axios.get(link);
      dispath({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispath({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getFilteredProducts = (page=1,limit=9, field) => async (dispath) => {
  try {
    dispath({ type: FILTERED_PRODUCTS_REQUEST });
    let link = `/api/v1/productos?page=${page}&limit=${limit}${field}`;
    const { data } = await axios.get(link);
    console.log(link)
    dispath({
      type: FILTERED_PRODUCTS,
      payload: data,
    });
  } catch (error) {
    dispath({
      type: FILTERED_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getProductsSort = (page=1, limit=9, field) => async (dispath) => {
  try {
    dispath({type: SORT_PRODUCTS_REQUEST});
    let link = `/api/v1/productos?page=${page}&limit=${limit}&sort=${field}`;
    const {data} = await axios.get(link);
    dispath({
      type: SORT_PRODUCTS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispath({
      type:SORT_PRODUCTS_FAIL,
      payload: error.response.data.message
    })
  }
}

//GET product details
export const getProductDetails = (id) => async (dispath) => {
  try {
    dispath({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/v1/product/${id}`);
    dispath({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispath({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Clearin errors
export const clearErrors = () => async (dispath) => {
  dispath({ type: CLEAR_ERRORS });
};
