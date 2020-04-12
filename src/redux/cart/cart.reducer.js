import CartActionTypes from "./cart.types";

const initial_state = {
	cart: "hidden",
	cart_items: [],
};

const cartReducer = (state = initial_state, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART:
			return {
				...state,
				hidden: !state.cart,
			};
		default:
			return state;
	}
};

export default cartReducer;
