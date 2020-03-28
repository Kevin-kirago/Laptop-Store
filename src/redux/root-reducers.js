// Root-Reducer Represent all reducers as the base state reduver
import { combineReducers } from "redux";
import productsReducer from "./products/product.reducer";

const rootReducer = combineReducers({
	store: productsReducer
});

export default rootReducer;
