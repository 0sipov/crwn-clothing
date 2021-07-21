import { CartActionsType } from "./cart.types";

import {
  addItemToCart,
  removeItemFromCart,
  decreaseItemInCart,
  enlargeItemInCart,
} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionsType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionsType.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionsType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionsType.DECREASE_ITEMS:
      return {
        ...state,
        cartItems: decreaseItemInCart(state.cartItems, action.payload),
      };
    case CartActionsType.ENLARGE_ITEMS:
      return {
        ...state,
        cartItems: enlargeItemInCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};
