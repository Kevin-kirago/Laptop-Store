import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.actions";
import { NavLink } from "react-router-dom";

import "./navigation.component.scss";
import GithubLogo from "../../assets/bxl-github.svg";
import cartIcon from "../../assets/bxs-cart-alt.svg";
import Cart from "../cart/cart.component";

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

const Navigation = ({ toggleCart }) => {
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
						<img src={cartIcon} alt="cart-icon" />[ 0 ]
					</span>
				</li>
			</ul>
			<Cart />
		</nav>
	);
};

const mapDispatchToProps = (dispatchEvent) => {
	return {
		toggleCart: () => dispatchEvent(toggleCart()),
	};
};

export default connect(null, mapDispatchToProps)(Navigation);
