import CartActionTypes from "./cart.types";

export const toggleCart = () => {
	return {
		type: CartActionTypes.TOGGLE_CART,
	};
};

export const addItemToCart = (item) => {
	return {
		type: CartActionTypes.ADD_ITEM,
		payload: item,
	};
};

export const removeItemFromCart = (item) => {
	return {
		type: CartActionTypes.REMOVE_ITEM,
		payload: item,
	};
};

export const clearItemFromCart = (item) => {
	return {
		type: CartActionTypes.CLEAR_ITEM,
		payload: item,
	};
};
