import { TOGGLE_WISHLIST } from "../actions/wishlistActions";

const initialState = {
  wishlistItems: []
};

export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_WISHLIST:
      const exists = state.wishlistItems.find(item => item.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          wishlistItems: state.wishlistItems.filter(item => item.id !== action.payload.id)
        };
      } else {
        return {
          ...state,
          wishlistItems: [...state.wishlistItems, action.payload]
        };
      }
    default:
      return state;
  }
};