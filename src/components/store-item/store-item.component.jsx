import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import "./store-item.component.scss";

const HeaderSection = styled.div`
	positon: relative;
	width: 100%;

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
`;
const MainSection = styled.div`
	position: relative;
	padding: 2rem;
	background-color: #fff;

	display: grid;
	grid-row-gap: 1rem;

	.heading {
		font-size: 1.6rem;
		font-weight: 600;
	}

	.paragraph {
		font-size: 1.1rem;
		color: #222;
	}

	.content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
`;

const FooterSection = styled.div`
	position: relative;
	padding: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StoreItem = ({ item }) => {
	return (
		<div className="store__item">
			<HeaderSection>
				<img src={item.fields.thumbnail} alt={`item-${item.sys.id}`} />
			</HeaderSection>
			<MainSection>
				<span className="heading">{item.fields.productName}</span>
				<p className="paragraph">{item.fields.description}</p>
				<div className="content"></div>
			</MainSection>
			<FooterSection>
				<div className="footer__content">dv x</div>
				<Link className="btn" to="/">
					View More
				</Link>
			</FooterSection>
		</div>
	);
};

export default StoreItem;
