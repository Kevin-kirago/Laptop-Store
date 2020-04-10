// Root-Reducer Represent all reducers as the base state reduver
import { combineReducers } from "redux";
import shopStoreReducer from "./shop-store/shop-store.reducer";
import productReducer from "./products/product.reducer";

const rootReducer = combineReducers({
	store: shopStoreReducer,
	products: productReducer,
});

export default rootReducer;
