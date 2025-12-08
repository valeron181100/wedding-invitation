import styled from "@emotion/styled";
import type { TextProps } from "../../components/view/text";

export const EnvelopeTitle = styled.span<TextProps>`
	font-family: ${({ theme }) => theme.typography.fontFamily.monospace};
	font-size: 1.3em;
	color: ${({ theme }) => theme.colors.text.onSecondary};
	align-self: center;
`;
