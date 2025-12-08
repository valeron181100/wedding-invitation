import styled from "@emotion/styled";
import {
	convertHyphenToCamelCase,
	convertSizeToPixels,
	type Size,
} from "../lib";

export interface TextProps {
	design?: "on-primary" | "on-secondary";
	fontSize?: Size;
}

export const Text = styled.span<TextProps>`
	font-family: ${({ theme }) => theme.typography.fontFamily.base};
	font-size: ${({ theme, fontSize }) =>
		fontSize ? convertSizeToPixels(fontSize) : theme.typography.fontSize.base};
	color: ${({ theme, design }) =>
		design
			? theme.colors.text[
					convertHyphenToCamelCase(design) as keyof typeof theme.colors.text
				]
			: theme.colors.text.onPrimary};
`;
