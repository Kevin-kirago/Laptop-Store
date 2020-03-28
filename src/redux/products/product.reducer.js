import STORE_DATA from "./data";

const initial_state = {
	products: STORE_DATA
};

const productsReducer = (state = initial_state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default productsReducer;
