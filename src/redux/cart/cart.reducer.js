import CartActionTypes from "./cart.types";

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
		default:
			return state;
	}
};

export default cartReducer;
