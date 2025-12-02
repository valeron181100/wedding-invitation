import styled from "@emotion/styled";
import { Flex, type FlexProps } from "./flex";

interface SectionContainerProps extends FlexProps {
	design?: "primary" | "secondary";
}

export const SectionContainer = styled(Flex)<SectionContainerProps>`
	width: 100%;
	height: 100vh;
	background-color: ${({ theme, design }) =>
		theme.colors.background[design ?? "secondary"]};
`;
