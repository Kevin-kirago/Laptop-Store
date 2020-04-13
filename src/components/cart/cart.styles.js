import styled, { css } from "styled-components";

const cartOpen = css`
	opacity: 1 !important;
	visibility: visible !important;
	transform: translateX(0) !important;
`;

const cartClosed = css`
	transform: translateX(100%);
	opacity: 0;
	visibilty: hidden;
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
	padding: 1rem;
	width: 45rem;
	top: 0;
	right: 0;
	height: 100vh;
	background-color: #222;
	z-index: 10;
	transition: all 0.2s ease-in;

	${getNavStatus}
`;
