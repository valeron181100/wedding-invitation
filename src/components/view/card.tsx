import styled from "@emotion/styled";
import { Flex, type FlexProps } from "./flex";

type CardProps = FlexProps & {
	design?: "primary" | "secondary";
};

export const Card = styled(Flex)<CardProps>`
	border-style: solid;
	border-width: 1px;
	border-radius: 20px;

	border-color: ${({ theme, design }) =>
		design === "secondary"
			? theme.palette.secondary.main
			: theme.palette.primary.main};
`;
