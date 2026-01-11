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
			secondary: "#F7D88C",
		},
	},

	typography: {
		fontFamily: "tagesschrift, Arial, sans-serif",

		body1: {
			fontSize: "1.3em",
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
