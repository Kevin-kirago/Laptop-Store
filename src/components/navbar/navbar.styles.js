import styled from "styled-components";

export const GithubAnchor = styled.a`
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
