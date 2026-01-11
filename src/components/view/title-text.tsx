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
	design?: "on-primary" | "on-secondary";
	children?: string | React.ReactNode;
}

const TitleTextContainer = styled.span<{
	nowrap?: boolean;
	fontSize?: string;
	design?: "on-primary" | "on-secondary";
}>`
	font-size: ${({ theme, fontSize }) =>
		fontSize || theme.typography.h1.fontSize};

	font-weight: bold;

	white-space: ${({ nowrap }) => (nowrap ? "nowrap" : "wrap")};

	color: ${({ theme, design }) =>
		design === "on-secondary"
			? theme.palette.secondary.contrastText
			: theme.palette.primary.contrastText};
`;

export const TitleText = ({
	firstLettersItalicAmount = 0,
	children,
	nowrap = false,
	fullCursive = false,
	fontSize,
	design = "on-primary",
	style,
}: TitleTextProps) => {
	const theme = useTheme();

	const text = typeof children === "string" ? children : String(children ?? "");

	const contentCursivePart = text.slice(0, firstLettersItalicAmount);
	const contentBaseline = text.slice(firstLettersItalicAmount);

	return (
		<TitleTextContainer
			style={style}
			design={design}
			nowrap={nowrap}
			fontSize={fontSize ? `${convertSizeToPixels(fontSize)}px` : undefined}
		>
			<span
				style={{
					fontFamily: theme.typography.h1.fontFamily,
					fontStyle: "italic",
				}}
			>
				{contentCursivePart}
			</span>

			<span
				style={{
					fontFamily: fullCursive
						? theme.typography.h1.fontFamily
						: theme.typography.fontFamily,
				}}
			>
				{contentBaseline}
			</span>
		</TitleTextContainer>
	);
};
