import styled from "@emotion/styled";
import { Flex } from "../../components/view";
import { LovelyFramePartTopIcon } from "../../components/view/lovely-frame-part-top-icon";
import { LovelyFramePartBottomIcon } from "../../components/view/lovely-frame-part-bottom-icon";

export const StyledFormContainer = styled(Flex)`
	z-index: 1;
`;

export const StyledLovelyFramePartTopIcon = styled(LovelyFramePartTopIcon)`
	width: 100vw;
	max-width: 520px;
`;

export const StyledLovelyFramePartBottomIcon = styled(
	LovelyFramePartBottomIcon,
)`
	width: 100vw;
	max-width: 520px;
`;
