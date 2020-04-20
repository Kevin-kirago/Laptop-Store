import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCart } from "../../redux/cart/cart.actions";
import { NavLink } from "react-router-dom";

import Cart from "../cart/cart.component";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { GithubAnchor } from "./navbar.styles";

import "./navbar.styles.scss";
import GithubLogo from "../../assets/bxl-github.svg";
import cartIcon from "../../assets/bxs-cart-alt.svg";

const Navbar = ({ toggleCart, cartItemsCount }) => {
	return (
		<div className="navigation">
			<GithubAnchor href="https://github.com/Kevin-kirago/Laptop-Store" target="_blank">
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
		</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
