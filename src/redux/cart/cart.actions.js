import { CartActionsType } from "./cart.types";

const toggleCartHidden = () => ({
  type: CartActionsType.TOGGLE_CART_HIDDEN,
});
const addItemToCart = (item) => ({
  type: CartActionsType.ADD_TO_CART,
  payload: item,
});

const removeItemFromCart = (item) => ({
  type: CartActionsType.REMOVE_FROM_CART,
  payload: item,
});

const decreaseItemInCart = (item) => ({
  type: CartActionsType.DECREASE_ITEMS,
  payload: item,
});

const enlargeItemInCart = (item) => ({
  type: CartActionsType.ENLARGE_ITEMS,
  payload: item,
});
export default {
  toggleCartHidden,
  addItemToCart,
  removeItemFromCart,
  decreaseItemInCart,
  enlargeItemInCart,
};
