import React from "react";
import { ArtDecoFrameCard } from "./art-deco-frame-card";
import { Flex } from "../flex";

interface ArtDecoFrameProps {
	children?: React.ReactNode | React.ReactNode[];
}

export const ArtDecoFrame = ({ children }: ArtDecoFrameProps) => {
	return (
		<Flex width={"100%"} style={{ height: "100%" }}>
			<ArtDecoFrameCard>
				<div className="corner top left" />
				<div className="corner top right" />
				<div className="corner bottom left" />
				<div className="corner bottom right" />
				<Flex width={"100%"}>{children}</Flex>
			</ArtDecoFrameCard>
		</Flex>
	);
};
