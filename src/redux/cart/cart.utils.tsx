export const addItemToCart = (cartItems: any[], addedItem: { id: string }) => {
  const existingCartItem = cartItems.find((item) => item.id === addedItem.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === addedItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...addedItem, quantity: 1 }];
};

export const removeItemFromCart = (
  cartItems: any[],
  removedItem: { id: string }
) => {
  return cartItems.filter((item) => {
    return item.id !== removedItem.id;
  });
};

export const decreaseItemInCart = (
  cartItems: any[],
  decreasedItem: { id: string }
) => {
  return cartItems.map((item) => {
    if (item.quantity === 0) {
      return item;
    }
    if (item.id === decreasedItem.id) {
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });
};

export const enlargeItemInCart = (
  cartItems: any[],
  decreasedItem: { id: string }
) => {
  return cartItems.map((item) => {
    if (item.id === decreasedItem.id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
};
