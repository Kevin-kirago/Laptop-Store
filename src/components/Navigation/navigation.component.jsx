import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartNav } from "../../redux/cart/cart.selector";
import { NavLink } from "react-router-dom";

import "./navigation.component.scss";
import GithubLogo from "../../assets/bxl-github.svg";

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

const Navigation = ({ hidden }) => {
	const anchor = "https://github.com/Kevin-kirago/phone-store";

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
				{hidden ? null : (
					<li className="navigation__item">
						<span className="navigation__item--link">Cart&nbsp;[ 0 ]</span>
					</li>
				)}
			</ul>
		</nav>
	);
};

const mapStateToProps = createStructuredSelector({
	hidden: selectCartNav,
});

export default connect(mapStateToProps)(Navigation);
