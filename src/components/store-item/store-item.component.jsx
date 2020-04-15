import React from "react";
import addIcon from "../../assets/bxs-shopping-bag.svg";
import "./store-item.component.scss";
import { addItemToCart } from "../../redux/cart/cart.actions";
import { HeaderSection, MainSection, FooterSection } from "./store-item.styles";

const StoreItem = ({ item, history, match, dispatch }) => {
	const {
		fields: { thumbnail, productName, description, cpu, screen, storage, ram, price },
		sys: { id, linkUrl },
	} = item;

	const itemToAdd = { id, thumbnail, productName, price };

	return (
		<div className="store__item">
			<HeaderSection>
				<img src={thumbnail} alt={`item-${id}`} />
			</HeaderSection>
			<MainSection>
				<h1 className="heading">{productName}</h1>
				<p className="paragraph">{description}</p>
				<div className="content">
					<div className="content__text">
						<span className="content__text--icon" role="img" aria-label="calculations">
							🧮
						</span>
						<div className="content__text--name">{cpu}</div>
					</div>
					<div className="content__text">
						<span className="content__text--icon" role="img" aria-label="laptop screen">
							💻
						</span>
						<div className="content__text--name">{screen}</div>
					</div>
					<div className="content__text">
						<span className="content__text--icon" role="img" aria-label="files and folding">
							🗃️
						</span>
						<div className="content__text--name">{storage}</div>
					</div>
					<div className="content__text">
						<span className="content__text--icon" role="img" aria-label="storage">
							💾
						</span>
						<div className="content__text--name">{ram}</div>
					</div>
				</div>
			</MainSection>
			<span className="addToCartBtn" onClick={() => dispatch(addItemToCart(itemToAdd))}>
				<img src={addIcon} alt="add item to cart icon" />
			</span>
			<FooterSection>
				<span>${price}</span>
				<button className="btn" onClick={() => history.push(`${match.url}${linkUrl}`)}>
					View More
				</button>
			</FooterSection>
		</div>
	);
};

export default StoreItem;
