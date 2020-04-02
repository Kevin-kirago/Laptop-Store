import styled from "styled-components";

export const HeaderSection = styled.div`
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
export const MainSection = styled.div`
	position: relative;
	padding: 2rem;
	background-color: #fff;

	display: grid;
	grid-template-rows: min-content min-content 1fr;
	grid-row-gap: 1rem;

	.heading {
		position: relative;
		font-size: 1.6rem;
		font-weight: 700;
	}

	.paragraph {
		font-size: 1.2rem;
		color: #222;
		margin-bottom: 1rem;
	}

	.content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 2rem;

		&__text {
			display: grid;
			grid-template-columns: 2rem 1fr;
			align-content: start;
			grid-column-gap: 1rem;

			&--icon {
				font-size: 1.3rem;
			}

			&--name {
				font-size: 1.2rem;
				align-self: center;
			}
		}
	}
`;

export const FooterSection = styled.div`
	position: relative;
	padding: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	span {
		font-size: 2rem;
		color: #333;
	}
`;
