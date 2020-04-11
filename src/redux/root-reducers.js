// Root-Reducer Represent all reducers as the base state reduver
import { combineReducers } from "redux";
import shopStoreReducer from "./shop-store/shop-store.reducer";

const rootReducer = combineReducers({
	store: shopStoreReducer,
});

export default rootReducer;
