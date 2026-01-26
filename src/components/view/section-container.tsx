import styled from "@emotion/styled";
import { Flex, type FlexProps } from "./flex";

interface SectionContainerProps extends FlexProps {
	design?: "primary" | "secondary";
}

export const SectionContainer = styled(Flex)<SectionContainerProps>`
	position: relative;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100dvh;

	background-color: ${({ theme, design }) =>
		design === "primary"
			? theme.palette.primary.main
			: theme.palette.background.paper};
`;

export const SectionContainerContent = styled(Flex)`
	position: relative;
	width: 100%;
	height: 100dvh;
	max-width: 520px;
`;
