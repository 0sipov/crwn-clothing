import * as React from "react";

import { connect } from "react-redux";

import cartActions from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

export interface cartItemsType {
  name: string;
  quantity: Number;
  price: Number;
  imageUrl: string;
  id: string;
}

export interface CheckoutItemProps {
  cartItems: cartItemsType;
  removeItemFromCart: (cartItems: cartItemsType) => void;
  decreaseItemInCart: (cartItems: cartItemsType) => void;
  enlargeItemInCart: (cartItems: cartItemsType) => void;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({
  cartItems,
  removeItemFromCart,
  decreaseItemInCart,
  enlargeItemInCart,
}) => {
  const { name, quantity, price, imageUrl } = cartItems;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItemInCart(cartItems)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => enlargeItemInCart(cartItems)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => removeItemFromCart(cartItems)}
      >
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  removeItemFromCart: (item: any) =>
    dispatch(cartActions.removeItemFromCart(item)),
  decreaseItemInCart: (item: any) =>
    dispatch(cartActions.decreaseItemInCart(item)),
  enlargeItemInCart: (item: any) =>
    dispatch(cartActions.enlargeItemInCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
