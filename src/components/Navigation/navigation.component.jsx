import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCart } from "../../redux/cart/cart.actions";
import { NavLink } from "react-router-dom";

import "./navigation.component.scss";
import GithubLogo from "../../assets/bxl-github.svg";
import cartIcon from "../../assets/bxs-cart-alt.svg";
import Cart from "../cart/cart.component";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

const GithubAnchor = styled.a`
	&:link,
	&:visited {
		position: relative;
		background-color: #000;
		height: 100%;
		width: 10rem;
		clip-path: polygon(0 0, 0% 100%, 100% 0);

		@media only screen and (max-width: 600px) {
			width: 7rem;
		}
	}

	img {
		position: absolute;
		top: 35%;
		left: 35%;
		transform: translate(-50%, -50%);
		filter: grayscale(1) brightness(0) invert(1);
	}
`;

const Navigation = ({ toggleCart, cartItemsCount }) => {
	const anchor = "https://github.com/Kevin-kirago/Laptop-Store";

	return (
		<nav className="navigation">
			<GithubAnchor href={anchor} target="_blank">
				<img src={GithubLogo} alt="github-logo" />
			</GithubAnchor>
			<ul className="navigation__list">
				<li className="navigation__item">
					<NavLink to="/" className="navigation__item--link">
						Store
					</NavLink>
				</li>
				<li className="navigation__item" onClick={toggleCart}>
					<span className="navigation__item--link">
						<img src={cartIcon} alt="cart-icon" />[ {`${cartItemsCount}`} ]
					</span>
				</li>
			</ul>
			<Cart />
		</nav>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItemsCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatchEvent) => {
	return {
		toggleCart: () => dispatchEvent(toggleCart()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
