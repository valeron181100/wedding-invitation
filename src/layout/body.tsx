import styled from "@emotion/styled";

export const Body = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	background-color: ${({ theme }) => theme.palette.background.paper};
`;
