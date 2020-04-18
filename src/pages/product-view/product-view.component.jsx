import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";
import { selectProductItem } from "../../redux/shop-store/shop-store.selector";
import "./product-view.styles.scss";

const ProductView = ({ product, addItem }) => {
	const {
		fields: {
			item: { main_features, images, description },
			productName,
			availability,
			price,
			stars,
			thumbnail,
		},
		sys: { id },
	} = product;

	return (
		<div className="product">
			<div className="product__features">
				<h1 className="product__heading--primary">Features</h1>
				{main_features.map((detail) => (
					<div className="product__content" key={main_features.findIndex((ind) => ind === detail)}>
						<h2 className="product__heading--secondary">{detail.feature}</h2>
						<p className="product__paragraph">{detail.description}</p>
					</div>
				))}
			</div>
			<div className="product__story">
				<h1 className="product__heading--primary-red">{productName}</h1>
				<p className="product__paragraph">{description}</p>
				<div className="product__availability">
					Availability: <span>{availability}</span>
				</div>
				<div className="product__price">
					Price: <span>${price}</span>
				</div>
				<div className="product__rating">
					Rating: <span>{stars} / (7)</span>
				</div>
				<button className="btn" onClick={() => addItem({ id, productName, price, thumbnail })}>
					Add To Cart
				</button>
			</div>
			<div className="product__thumbnail">
				{images.map((curImg) => {
					const index = images.findIndex((img) => img === curImg);
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

const mapStateToProps = (state, { match }) => ({
	product: selectProductItem(match.url)(state),
});

const mapDispatchToProps = (dispatchEvent) => ({
	addItem: (item) => dispatchEvent(addItemToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
