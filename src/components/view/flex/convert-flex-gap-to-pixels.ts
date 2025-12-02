import type { FlexGap } from "./flex";

export const convertFlexGapToPixels = (gap: FlexGap) => {
	return parseInt(gap.replace("s", ""), 10) * 4;
};
