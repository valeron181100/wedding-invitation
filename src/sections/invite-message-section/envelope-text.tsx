import styled from "@emotion/styled";
import type { TextProps } from "../../components/view/text";

export const EnvelopeText = styled.span<TextProps>`
	font-family: ${({ theme }) => theme.typography.fontFamily.monospace};
	font-size: 1em;
	color: ${({ theme }) => theme.colors.text.onSecondary};
`;
