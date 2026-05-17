import { 
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  UPDATE_CART_ITEM_COUNT, 
  TOGGLE_CART_ITEM_CHECK,
  CLEAR_CART 
} from '../actions/shoppingCartActions';

const initialState = {
  cart: []
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productToAdd = action.payload;
      const existingIndex = state.cart.findIndex(item => item.product.id === productToAdd.id);
      if (existingIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingIndex].count += 1;
        return { ...state, cart: updatedCart };
      }
      return { ...state, cart: [...state.cart, { count: 1, checked: true, product: productToAdd }] };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.product.id !== action.payload)
      };

    case UPDATE_CART_ITEM_COUNT:
      return {
        ...state,
        cart: state.cart.map(item => 
          item.product.id === action.payload.productId 
            ? { ...item, count: action.payload.count } 
            : item
        )
      };

    case TOGGLE_CART_ITEM_CHECK:
      return {
        ...state,
        cart: state.cart.map(item => 
          item.product.id === action.payload 
            ? { ...item, checked: !item.checked } 
            : item
        )
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: []
      };

    default:
      return state;
  }
};