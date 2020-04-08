import product_data from "./data";

const initial_state = {
	product_item: product_data,
};

const productReducer = (state = initial_state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default productReducer;
