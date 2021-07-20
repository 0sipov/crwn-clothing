import * as React from "react";

import "./cart-item.styles.scss";

export interface CartItemProps {
  cartItem: {
    price: number;
    quantity: number;
    name: string;
    imageUrl: string;
    id: string;
  };
}

const CartItem: React.FC<CartItemProps> = ({
  cartItem: { price, quantity, name, imageUrl },
}) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {price} x {quantity}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
