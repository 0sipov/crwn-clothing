import { CartActionsType } from "./cart.types";

const toggleCartHidden = () => ({
  type: CartActionsType.TOGGLE_CART_HIDDEN,
});

export default toggleCartHidden;
