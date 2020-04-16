// Root-Reducer Represent all reducers as the base state reduver
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import shopStoreReducer from "./shop-store/shop-store.reducer";

const persistConfig = {
	key: "container",
	storage,
	whitelist: ["cart"],
};

const rootReducer = combineReducers({
	cart: cartReducer,
	store: shopStoreReducer,
});

export default persistReducer(persistConfig, rootReducer);
