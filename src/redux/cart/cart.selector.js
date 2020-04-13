import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
export const selectCartDrawer = createSelector([selectCart], (cart) => cart.isOpen);
