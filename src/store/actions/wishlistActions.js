export const TOGGLE_WISHLIST = "TOGGLE_WISHLIST";

export const toggleWishlist = (product) => {
  return {
    type: TOGGLE_WISHLIST,
    payload: product
  };
};