import { createTheme } from "@mui/material";

const mainRedColor = "#5c0607";

export const theme = createTheme({
	palette: {
		primary: {
			main: mainRedColor,
			contrastText: "#F7D88C",
		},
		secondary: {
			main: "#fff5d4",
			contrastText: mainRedColor,
		},
		background: {
			default: mainRedColor,
			paper: "#fff5d4",
		},
		text: {
			primary: mainRedColor,
			secondary: mainRedColor,
		},
	},

	typography: {
		fontFamily: "tagesschrift, Arial, sans-serif",

		body1: {
			fontSize: "1.3em",
		},
		body2: {
			fontSize: "0.7em",
		},
		h6: {
			fontSize: "1em",
		},

		h1: {
			fontSize: "3.5em",
			color: "#FFEBED",
			fontFamily: "als-finlandia-script, cursive",
		},

		code: {
			fontFamily: "courier, courier",
		},
	},
});
theme!.components!.MuiTextField = {
	styleOverrides: {
		root: {
			"& .MuiInputBase-input": {
				fontSize: theme.typography.body2.fontSize,
			},
			"& .MuiFormLabel-root": {
				fontSize: theme.typography.h6.fontSize,
			},
		},
	},
};

theme!.components!.MuiRadioGroup = {
	styleOverrides: {
		root: {
			"& .MuiFormControlLabel-root": {
				fontSize: theme.typography.body2.fontSize,
				border: "solid 2px blue",
			},
		},
	},
};
