import styled from "@emotion/styled";

export const Body = styled.div`
	display: flex;
	width: 100vw;
	overflow-y: scroll;
	overflow-x: hidden;
	height: 100dvh;
	scroll-snap-type: y mandatory;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	background-color: ${({ theme }) => theme.palette.background.paper};
`;
