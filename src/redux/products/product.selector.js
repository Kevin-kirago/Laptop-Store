import { createSelector } from "reselect";

const selectStore = state => state.store;
export const selectProducts = createSelector([selectStore], store => store.products);
