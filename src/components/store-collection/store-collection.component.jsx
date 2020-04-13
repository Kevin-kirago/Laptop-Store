import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProducts } from "../../redux/shop-store/shop-store.selector";
import StoreItem from "../store-item/store-item.component";

const StoreCollectionDiv = styled.div`
	position: relative;
	padding: 0rem 5rem;
	width: 100%;

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 5rem;

	@media only screen and (max-width: 1000px) {
		padding: 0rem;
		grid-template-columns: repeat(2, 1fr);
	}

	@media only screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;

const StoreCollection = ({ products, ...props }) => {
	return (
		<StoreCollectionDiv>
			{products.map((item) => {
				return <StoreItem key={item.sys.id} item={item} {...props} />;
			})}
		</StoreCollectionDiv>
	);
};

// pulling data from redux state manager
const mapStateToProps = createStructuredSelector({
	products: selectProducts,
});

export default connect(mapStateToProps)(StoreCollection);
