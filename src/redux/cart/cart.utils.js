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

// remove item from cart
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	// check if the item already exists in cart
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

	/* condition : if existingCartItem = true check to see if the quantity is equal to one
	 if true filter the cartItem and return new array 
	*/
	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	// else find item to remove and restructure the quantity
	return cartItems.map((item) => {
		if (item.id === cartItemToRemove.id) {
			// pull the quantity value and decrement
			return { ...item, quantity: item.quantity - 1 };
		} else {
			return item;
		}
	});
};

// clear item from cart
export const clearItemFromCart = (cartItems, cartItemToClear) => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};
