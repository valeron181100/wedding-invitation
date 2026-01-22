import React, { type CSSProperties } from "react";
import styled from "@emotion/styled";
import { convertSizeToPixels, type Size } from "../../lib";

export type FlexAlignmentOptions =
	| "flex-start"
	| "flex-end"
	| "space-between"
	| "space-around"
	| "space-evenly"
	| "center";

export interface FlexProps {
	children?: React.ReactNode | React.ReactNode[];
	direction?: "row" | "column";
	justifyContent?: FlexAlignmentOptions;
	alignItems?: FlexAlignmentOptions;
	flexWrap?: CSSProperties["flexWrap"];
	gap?: Size;

	/** padding */
	p?: Size;
	pl?: Size;
	pr?: Size;
	pt?: Size;
	pb?: Size;

	width?: string;
	height?: string;
}

const getPaddingValue = (value?: Size) =>
	value !== undefined ? `${convertSizeToPixels(value)}px` : undefined;

export const Flex = styled.div<FlexProps>`
	display: flex;
	position: relative;

	justify-content: ${(props) => props.justifyContent ?? "flex-start"};
	align-items: ${(props) => props.alignItems ?? "flex-start"};
	flex-direction: ${(props) => props.direction ?? "row"};
	flex-wrap: ${(props) => props.flexWrap};

	gap: ${(props) => (props.gap ? `${convertSizeToPixels(props.gap)}px` : 0)};

	/* ----- Padding ----- */

	padding-top: ${(props) => getPaddingValue(props.pt ?? props.p) ?? 0};

	padding-bottom: ${(props) => getPaddingValue(props.pb ?? props.p) ?? 0};

	padding-left: ${(props) => getPaddingValue(props.pl ?? props.p) ?? 0};

	padding-right: ${(props) => getPaddingValue(props.pr ?? props.p) ?? 0};

	/* ----- Width ----- */

	width: ${(props) => {
		const width = props.width ?? "100%";

		const leftP = props.pl || props.p;
		const left = leftP ? convertSizeToPixels(leftP) : 0;
		const rightP = props.pr ?? props.p;
		const right = rightP ? convertSizeToPixels(rightP) : 0;

		return left || right ? `calc(${width} - ${left + right}px)` : width;
	}};

	/* ----- Height ----- */

	height: ${(props) => {
		const height = props.height ?? "";

		if (!height) return "";

		const topP = props.pt ?? props.p;
		const top = topP ? convertSizeToPixels(topP) : 0;
		const bottomP = props.pb ?? props.p;
		const bottom = bottomP ? convertSizeToPixels(bottomP) : 0;

		return top || bottom ? `calc(${height} - ${top + bottom}px)` : height;
	}};
`;
