import { CartActionsType } from "./cart.types";

const toggleCartHidden = () => ({
  type: CartActionsType.TOGGLE_CART_HIDDEN,
});
const addItemToCart = (item) => ({
  type: CartActionsType.ADD_TO_CART,
  payload: item,
});

export default { toggleCartHidden, addItemToCart };
