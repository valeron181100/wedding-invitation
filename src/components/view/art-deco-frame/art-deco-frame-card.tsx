import styled from "@emotion/styled";

export const ArtDecoFrameCard = styled.div<{ borderColor?: string }>`
	display: flex;
	flex-direction: column;

	background: transparent;
	width: 100%;
	height: calc(100% - 82px);
	margin: 24px;
	border: 1px solid ${({ borderColor }) => borderColor ?? "hsl(40, 65%, 80%)"};
	position: relative;
	padding: 1rem;

	.corner {
		width: 0.5rem;
		height: 0.5rem;
		border: 1px solid ${({ borderColor }) => borderColor ?? "hsl(40, 65%, 80%)"};
		position: absolute;

		&::after,
		&::before {
			content: "";
			position: absolute;
		}

		&::after {
			width: 2rem;
			height: calc(1rem - 1px);
		}

		&::before {
			width: calc(1rem - 1px);
			height: 2rem;
		}

		&.left {
			left: -0.5rem;

			&::after {
				left: calc(-2px + 1rem);
				border-left: 1px solid
					${({ borderColor }) => borderColor ?? "hsl(40, 65%, 80%)"};
			}

			&::before {
				left: -1px;
				border-left: 1px solid
					${({ borderColor }) => borderColor ?? "hsl(40, 65%, 80%)"};
			}
		}

		&.right {
			right: -0.5rem;

			&::after {
				right: calc(-2px + 1rem);
				border-right: 1px solid
					${({ borderColor }) => borderColor ?? "hsl(40, 65%, 80%)"};
			}

			&::before {
				right: -1px;
				border-right: 1px solid
					${({ borderColor }) => borderColor ?? "hsl(40, 65%, 80%)"};
			}
		}

		&.top {
			top: -0.5rem;

			&::after {
				top: -1px;
				border-top: 1px solid
					${({ borderColor }) => borderColor ?? "hsl(40, 65%, 80%)"};
			}

			&::before {
				top: calc(-2px + 1rem);
				border-top: 1px solid
					${({ borderColor }) => borderColor ?? "hsl(40, 65%, 80%)"};
			}
		}

		&.bottom {
			bottom: -0.5rem;

			&::after {
				bottom: -1px;
				border-bottom: 1px solid
					${({ borderColor }) => borderColor ?? "hsl(40, 65%, 80%)"};
			}

			&::before {
				bottom: calc(-2px + 1rem);
				border-bottom: 1px solid
					${({ borderColor }) => borderColor ?? "hsl(40, 65%, 80%)"};
			}
		}
	}
`;
