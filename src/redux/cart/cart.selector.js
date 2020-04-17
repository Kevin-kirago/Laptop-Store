import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
export const selectCartDrawer = createSelector([selectCart], (cart) => cart.isOpen);
export const selectCartItems = createSelector([selectCart], (cart) => cart.cart_items);
export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => cartItems.length);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * parseFloat(cartItem.price), 0)
);
