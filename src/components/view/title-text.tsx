import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import React from "react";

interface TitleTextProps {
	firstLettersItalicAmount?: number;
	style?: React.CSSProperties;
	children?: string;
}

const TitleTextContainer = styled.span`
	font-size: ${({ theme }) => theme.typography.fontSize.title};
	color: ${({ theme }) => theme.colors.text.titleWarm};
`;

export const TitleText = ({
	firstLettersItalicAmount = 1,
	children,
	style,
}: TitleTextProps) => {
	const theme = useTheme();
	const contentCursivePart = children?.slice(0, firstLettersItalicAmount);
	const contentBaseline = children?.slice(firstLettersItalicAmount);

	return (
		<TitleTextContainer style={style}>
			<span
				style={{
					fontFamily: theme.typography.fontFamily.cursive,
				}}
			>
				{contentCursivePart}
			</span>
			<span
				style={{
					fontFamily: theme.typography.fontFamily.base,
				}}
			>
				{contentBaseline}
			</span>
		</TitleTextContainer>
	);
};
