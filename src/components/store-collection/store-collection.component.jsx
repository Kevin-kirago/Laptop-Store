import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProducts } from "../../redux/products/product.selector";
import StoreItem from "../store-item/store-item.component";

const StoreCollection = ({ products, ...props }) => {
	return (
		<>
			{products.map(item => {
				return <StoreItem key={item.sys.id} item={item} {...props} />;
			})}
		</>
	);
};

// pulling data from redux state manager
const mapStateToProps = createStructuredSelector({
	products: selectProducts
});

export default connect(mapStateToProps)(StoreCollection);
