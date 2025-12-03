import type { Size } from "./types";

export const convertSizeToPixels = (size: Size) => {
	return parseInt(size.replace("s", ""), 10) * 4;
};
