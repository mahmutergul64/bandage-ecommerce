import { API } from "../../api/axiosInstance";

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_FETCH_STATE = 'SET_FETCH_STATE';
export const SET_LIMIT = 'SET_LIMIT';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_FILTER = 'SET_FILTER';

export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: categories });
export const setProductList = (productList) => ({ type: SET_PRODUCT_LIST, payload: productList });
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (fetchState) => ({ type: SET_FETCH_STATE, payload: fetchState });
export const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await API.get('/categories');
    dispatch(setCategories(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const fetchProducts = (params = {}) => async (dispatch) => {
  dispatch(setFetchState('FETCHING'));
  try {
    const response = await API.get('/products', { params });
    
    const products = Array.isArray(response.data) ? response.data : (response.data.products || []);
    const total = typeof response.data.total !== 'undefined' ? response.data.total : products.length;

    dispatch(setProductList(products));
    dispatch(setTotal(total));
    dispatch(setFetchState('FETCHED'));
  } catch (error) {
    dispatch(setFetchState('FAILED'));
    console.error(error);
  }
};

export const fetchProductById = (productId) => async (dispatch) => {
  dispatch({ type: 'SET_CURRENT_PRODUCT_STATE', payload: 'FETCHING' });
  try {
    const response = await API.get(`/products/${productId}`);
    dispatch({ type: 'SET_CURRENT_PRODUCT', payload: response.data });
    dispatch({ type: 'SET_CURRENT_PRODUCT_STATE', payload: 'FETCHED' });
  } catch (error) {
    console.error(error);
    dispatch({ type: 'SET_CURRENT_PRODUCT_STATE', payload: 'FAILED' });
  }
};

export const addProduct = (productData) => async (dispatch) => {
  try {
    const response = await API.post('/products', productData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};