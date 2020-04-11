import { createSelector } from "reselect";

// pull the store obj from the state
const selectStore = (state) => state.store;

// fetch the store products from the store obj
export const selectProducts = createSelector([selectStore], (store) => store.products);

// select and pull an item from store products
export const selectProductItem = (pathName) =>
	createSelector([selectProducts], (products) => products.find((product) => product.fields.routeName === pathName));
