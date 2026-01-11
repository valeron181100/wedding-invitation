import styled from "@emotion/styled";
import React from "react";
import { CircleDawnStroke, TitleText } from "./index";

const StyledCircleDawnStroke = styled(CircleDawnStroke)`
	position: absolute;
	width: 300px;
	transform: translate(-90px, -90px);
`;

interface StrokedTextProps {
	children: React.ReactNode;
}

export const StrokedText = ({ children }: StrokedTextProps) => {
	return (
		<div>
			<StyledCircleDawnStroke />
			<TitleText design={"on-secondary"}>{children}</TitleText>
		</div>
	);
};
