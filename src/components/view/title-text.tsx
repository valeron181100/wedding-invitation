import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import React from "react";
import { convertSizeToPixels, type Size } from "../lib";

interface TitleTextProps {
	firstLettersItalicAmount?: number;
	nowrap?: boolean;
	fullCursive?: boolean;
	style?: React.CSSProperties;
	fontSize?: Size;
	children?: string;
}

const TitleTextContainer = styled.span<{ nowrap?: boolean; fontSize?: string }>`
	font-size: ${({ theme, fontSize }) =>
		fontSize || theme.typography.fontSize.title};
	color: ${({ theme }) => theme.colors.text.titleWarm};
	font-weight: bold;
	white-space: ${({ nowrap }) => (nowrap ? "nowrap" : "wrap")};
`;

export const TitleText = ({
	firstLettersItalicAmount = 0,
	children,
	nowrap = false,
	fullCursive = false,
	fontSize,
	style,
}: TitleTextProps) => {
	const theme = useTheme();
	const contentCursivePart = children?.slice(0, firstLettersItalicAmount);
	const contentBaseline = children?.slice(firstLettersItalicAmount);

	return (
		<TitleTextContainer
			style={style}
			nowrap={nowrap}
			fontSize={fontSize ? `${convertSizeToPixels(fontSize)}px` : undefined}
		>
			<span
				style={{
					fontFamily: theme.typography.fontFamily.cursive,
				}}
			>
				{contentCursivePart}
			</span>
			<span
				style={{
					fontFamily: fullCursive
						? theme.typography.fontFamily.cursive
						: theme.typography.fontFamily.base,
				}}
			>
				{contentBaseline}
			</span>
		</TitleTextContainer>
	);
};
