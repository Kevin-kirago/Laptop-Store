import styled, { css } from "styled-components";

const cartOpen = css`
	transform: translateX(0);
`;

const cartClosed = css`
	transform: translateX(100%);
`;

const getNavStatus = ({ props: { drawerIsOpen } }) => {
	if (drawerIsOpen) {
		return cartOpen;
	} else {
		return cartClosed;
	}
};

export const CartDrawer = styled.div`
	position: fixed;
	width: 45rem;
	top: 0;
	right: 0;
	height: 100vh;
	background-color: #222;
	z-index: 10;
	transition: transform 0.3s;

	${getNavStatus}
`;
