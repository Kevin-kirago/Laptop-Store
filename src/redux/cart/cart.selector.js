import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
export const selectCartNav = createSelector([selectCart], (cart) => cart.hidden);
