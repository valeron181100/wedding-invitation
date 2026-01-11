import styled from "@emotion/styled";
import type { TextProps } from "../../components/view/text";

export const EnvelopeText = styled.span<TextProps>`
	font-family: ${({ theme }) => theme.typography.fontFamily};
	font-size: 1em;
	color: ${({ theme }) => theme.palette.secondary.contrastText};
`;
