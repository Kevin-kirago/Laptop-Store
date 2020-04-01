import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProducts } from "../redux/products/product.selector";

import "./store.component.scss";
import StoreItem from "../components/store-item/store-item.component";

const Store = ({ products }) => {
	return (
		<div className="store">
			{products.map(item => {
				return <StoreItem key={item.sys.id} item={item} />;
			})}
		</div>
	);
};

// pulling data from redux state manager
const mapStateToProps = createStructuredSelector({
	products: selectProducts
});

export default connect(mapStateToProps)(Store);
