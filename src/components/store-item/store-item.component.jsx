import React from "react";
import addIcon from "../../assets/bxs-cart.svg";
import "./store-item.component.scss";
import { HeaderSection, MainSection, FooterSection } from "./store-item.styles";

const StoreItem = ({ item, history, match }) => {
	return (
		<div className="store__item">
			<HeaderSection>
				<img src={item.fields.thumbnail} alt={`item-${item.sys.id}`} />
			</HeaderSection>
			<MainSection>
				<h1 className="heading">{item.fields.productName}</h1>
				<p className="paragraph">{item.fields.description}</p>
				<div className="content">
					<div className="content__text">
						<span className="content__text--icon" role="img" aria-label="calculations">
							🧮
						</span>
						<div className="content__text--name">{item.fields.cpu}</div>
					</div>
					<div className="content__text">
						<span className="content__text--icon" role="img" aria-label="laptop screen">
							💻
						</span>
						<div className="content__text--name">{item.fields.screen}</div>
					</div>
					<div className="content__text">
						<span className="content__text--icon" role="img" aria-label="files and folding">
							🗃️
						</span>
						<div className="content__text--name">{item.fields.storage}</div>
					</div>
					<div className="content__text">
						<span className="content__text--icon" role="img" aria-label="storage">
							💾
						</span>
						<div className="content__text--name">{item.fields.ram}</div>
					</div>
				</div>
			</MainSection>
			<span className="addToCartBtn">
				<img src={addIcon} alt="add item to cart icon" />
			</span>
			<FooterSection>
				<span>${item.fields.price}</span>
				<button className="btn" onClick={() => history.push(`${match.url}${item.sys.linkUrl}`)}>
					View More
				</button>
			</FooterSection>
		</div>
	);
};

export default StoreItem;
