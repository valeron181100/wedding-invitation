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
	p?: Size;
	width?: string;
	height?: string;
}

export const Flex = styled.div<FlexProps>`
	display: flex;
	justify-content: ${(props) => props.justifyContent ?? "flex-start"};
	align-items: ${(props) => props.alignItems ?? "flex-start"};
	flex-direction: ${(props) => props.direction ?? "row"};
	flex-wrap: ${(props) => props.flexWrap};
	gap: ${(props) => (props.gap ? `${convertSizeToPixels(props.gap)}px` : 0)};
	padding: ${(props) => (props.p ? `${convertSizeToPixels(props.p)}px` : 0)};
	width: ${(props) => {
		const width = props.width ?? "100%";
		return props.p
			? `calc(${width} - ${convertSizeToPixels(props.p) * 2}px)`
			: width;
	}};
	height: ${(props) => {
		const height = props.height ?? "100%";
		return props.p
			? `calc(${height} - ${convertSizeToPixels(props.p) * 2}px)`
			: height;
	}};
`;
