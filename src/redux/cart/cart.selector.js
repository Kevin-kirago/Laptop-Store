import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
export const selectCartDrawer = createSelector([selectCart], (cart) => cart.isOpen);
export const selectCartItems = createSelector([selectCart], (cart) => cart.cart_items);
export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => cartItems.length);
