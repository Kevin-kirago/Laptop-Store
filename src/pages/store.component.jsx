import React from "react";
import { Route } from "react-router-dom";
import StoreCollection from "../components/store-collection/store-collection.component";
import ProductView from "../components/product-view/product-view.component";
import "./store.component.scss";

const Store = ({ match }) => {
	return (
		<div className="store">
			<Route exact path={`${match.path}`} component={StoreCollection} />
			<Route path={`${match.path}store/:id`} component={ProductView} />
		</div>
	);
};

export default Store;
