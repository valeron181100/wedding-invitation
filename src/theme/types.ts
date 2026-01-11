import React from "react";
import type { theme } from "./theme";

export type Theme = typeof theme;

declare module "@mui/material/styles" {
	interface TypographyVariants {
		code: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		code?: React.CSSProperties;
	}
}

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		code: true;
	}
}
