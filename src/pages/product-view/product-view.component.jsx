import React from "react";
import { connect } from "react-redux";
import { selectProductItem } from "../../redux/shop-store/shop-store.selector";
import "./product-view.component.scss";

const ProductView = ({ product }) => {
	const { fields } = product;
	return (
		<div className="product">
			<div className="product__features">
				<h1 className="product__heading--primary">Features</h1>
				{fields.item.main_features.map((detail) => (
					<div className="product__content" key={fields.item.main_features.findIndex((ind) => ind === detail)}>
						<h2 className="product__heading--secondary">{detail.feature}</h2>
						<p className="product__paragraph">{detail.description}</p>
					</div>
				))}
			</div>
			<div className="product__story">
				<h1 className="product__heading--primary-red">{fields.productName}</h1>
				<p className="product__paragraph">{fields.item.description}</p>
				<div className="product__availability">
					Availability: <span>{fields.availability}</span>
				</div>
				<div className="product__price">
					Price: <span>${fields.price}</span>
				</div>
				<div className="product__rating">
					Rating: <span>{fields.stars} / (7)</span>
				</div>
				<button className="btn">Add To Cart</button>
			</div>
			<div className="product__thumbnail">
				{fields.item.images.map((curImg) => {
					const index = fields.item.images.findIndex((img) => img === curImg);
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
