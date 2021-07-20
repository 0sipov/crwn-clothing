import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";

class Cart extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem cartItem={cartItem} key={cartItem.id} />
          ))}
        </div>
        <CustomButton>CHECKOUT</CustomButton>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(Cart);
