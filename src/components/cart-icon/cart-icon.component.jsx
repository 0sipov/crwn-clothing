import React from "react";
import { connect } from "react-redux";

import cartActions from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";
console.log(
  "cartActions",
  cartActions.toggleCartHidden,
  cartActions.addItemToCart
);
const CartIcon = ({ toggleCardHidden }) => (
  <div className="cart-icon" onClick={toggleCardHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCardHidden: () => dispatch(cartActions.toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
