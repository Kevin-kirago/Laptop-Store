// add item to cart
export const addItemToCart = (cartItems, cartItemToAdd) => {
	// check if the item already exists in cart
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

	// if item exists increment quantity by 1 return updated cartitem data else
	if (existingCartItem) {
		return cartItems.map((item) => {
			if (item.id === cartItemToAdd.id) {
				return { ...item, quantity: item.quantity + 1 };
			} else {
				return item;
			}
		});
	}

	// if item does not exists push item to cart and define quantity as 1 return updated cartitem data
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
