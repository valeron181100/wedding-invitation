import styled from "@emotion/styled";
import { Flex, type FlexProps } from "./flex";

interface SectionContainerProps extends FlexProps {
	design?: "primary" | "secondary";
}

export const SectionContainer = styled(Flex)<SectionContainerProps>`
	width: 100vw;
	max-width: 100vw;
	height: 100vh;

	background-color: ${({ theme, design }) =>
		design === "primary"
			? theme.palette.primary.main
			: theme.palette.background.paper};
`;
