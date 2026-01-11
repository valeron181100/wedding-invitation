import { styled } from "@mui/material/styles";
import { convertSizeToPixels, type Size } from "../lib";

export interface TextProps {
	design?: "on-primary" | "on-secondary";
	fontSize?: Size;
	color?: string;
}

export const Text = styled("span")<TextProps>(
	({ theme, fontSize, design, color }) => ({
		fontFamily: theme.typography.fontFamily,

		fontSize: fontSize
			? `${convertSizeToPixels(fontSize)}px`
			: theme.typography.body1.fontSize,

		color:
			color ??
			(design === "on-secondary"
				? theme.palette.secondary.contrastText
				: theme.palette.primary.contrastText),
	}),
);
