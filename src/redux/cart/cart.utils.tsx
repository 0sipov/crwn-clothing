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
