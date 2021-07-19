import { CartActionsType } from "./cart.types";

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

    default:
      return state;
  }
};
