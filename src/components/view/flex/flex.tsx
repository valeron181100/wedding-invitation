import React from "react";
import styled from "@emotion/styled";
import { convertFlexGapToPixels } from "./convert-flex-gap-to-pixels";

export type FlexAlignmentOptions =
	| "flex-start"
	| "flex-end"
	| "space-between"
	| "space-around"
	| "space-evenly"
	| "center";

export type FlexGap =
	| "s0"
	| "s1"
	| "s2"
	| "s3"
	| "s4"
	| "s5"
	| "s6"
	| "s7"
	| "s8"
	| "s9";

export interface FlexProps {
	children?: React.ReactNode | React.ReactNode[];
	direction?: "row" | "column";
	justifyContent?: FlexAlignmentOptions;
	alignItems?: FlexAlignmentOptions;
	gap?: FlexGap;
	width?: string;
}

export const Flex = styled.div<FlexProps>`
	display: flex;
	justify-content: ${(props) => props.justifyContent ?? "flex-start"};
	align-items: ${(props) => props.alignItems ?? "flex-start"};
	flex-direction: ${(props) => props.direction ?? "row"};
	gap: ${(props) => (props.gap ? convertFlexGapToPixels(props.gap) : 0)};
	${(props) => (props.width ? `width: ${props.width};` : "")}
`;
