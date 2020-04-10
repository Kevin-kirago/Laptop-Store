import { createSelector } from "reselect";

const selectProducts = (state) => state.products;
export const selectProductItem = (pathName) =>
	createSelector([selectProducts], (products) => products.product_item.find((product) => product.routeName === pathName));
