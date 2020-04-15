import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

const initial_state = {
	isOpen: false,
	cart_items: [],
};

const cartReducer = (state = initial_state, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART:
			return {
				...state,
				isOpen: !state.isOpen,
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cart_items: addItemToCart(state.cart_items, action.payload),
			};
		default:
			return state;
	}
};

export default cartReducer;
