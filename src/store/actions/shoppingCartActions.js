export const SET_CART = 'SET_CART';
export const SET_PAYMENT = 'SET_PAYMENT';
export const SET_ADDRESS = 'SET_ADDRESS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM_COUNT = 'UPDATE_CART_ITEM_COUNT';
export const TOGGLE_CART_ITEM_CHECK = 'TOGGLE_CART_ITEM_CHECK';
export const CLEAR_CART = 'CLEAR_CART';

export const setCart = (cart) => ({ type: SET_CART, payload: cart });
export const setPayment = (payment) => ({ type: SET_PAYMENT, payload: payment });
export const setAddress = (address) => ({ type: SET_ADDRESS, payload: address });

export const addToCart = (product) => {
  return { type: ADD_TO_CART, payload: product };
};

export const removeFromCart = (productId) => {
  return { type: REMOVE_FROM_CART, payload: productId };
};

export const updateCartItemCount = (productId, count) => {
  return { type: UPDATE_CART_ITEM_COUNT, payload: { productId, count } };
};

export const toggleCartItemCheck = (productId) => {
  return { type: TOGGLE_CART_ITEM_CHECK, payload: productId };
};

export const clearCart = () => {
  return { type: CLEAR_CART };
};