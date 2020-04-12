// Root-Reducer Represent all reducers as the base state reduver
import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import shopStoreReducer from "./shop-store/shop-store.reducer";

const rootReducer = combineReducers({
	cart: cartReducer,
	store: shopStoreReducer,
});

export default rootReducer;
