import React from "react";
import { withRouter } from "react-router";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import cartActions from "../../redux/cart/cart.actions";

import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";

class Cart extends React.Component {
  render() {
    const { cartItems, history, dispatch } = this.props;
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <span className="cart-message">Cart is empty</span>
          ) : (
            cartItems.map((cartItem) => (
              <CartItem cartItem={cartItem} key={cartItem.id} />
            ))
          )}
        </div>

        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(cartActions.toggleCartHidden());
          }}
        >
          CHECKOUT
        </CustomButton>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(Cart));
