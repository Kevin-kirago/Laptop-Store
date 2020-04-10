import React from "react";
import { connect } from "react-redux";
import { selectProductItem } from "../../redux/products/product.selector";
import "./product-view.component.scss";

const ProductView = ({ product }) => {
	const { title, item } = product;

	return (
		<div className="product">
			<div className="product__features">
				<h1 className="product__heading--primary">Features</h1>
				{item.main_features.map((detail) => (
					<div className="product__content" key={item.main_features.findIndex((ind) => ind === detail)}>
						<h2 className="product__heading--secondary">{detail.feature}</h2>
						<p className="product__paragraph">{detail.description}</p>
					</div>
				))}
			</div>
			<div className="product__story">
				<h1 className="product__heading--primary-red">{title}</h1>
				<p className="product__paragraph">{item.description}</p>
				<button className="btn">Add To Cart</button>
			</div>
			<div className="product__thumbnail">
				{item.images.map((curImg) => {
					const index = item.images.findIndex((img) => img === curImg);
					return (
						<div className="product__thumbnail--img" key={index}>
							<img src={curImg} alt={`thumbnail-${index}`} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

const mapStateToProps = (state, { match }) => {
	return {
		product: selectProductItem(match.url)(state),
	};
};

export default connect(mapStateToProps)(ProductView);
