import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProducts } from "../redux/products/product.selector";

const Store = ({ products }) => {
	console.log(products);
	return <div className="store">Store</div>;
};

const mapStateToProps = createStructuredSelector({
	products: selectProducts
});

export default connect(mapStateToProps)(Store);
