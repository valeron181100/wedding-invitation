import styled from "@emotion/styled";

export const Body = styled.div`
	display: flex;
	width: 100%;
	//max-width: 870px;
	height: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	background-color: ${({ theme }) => theme.colors.background.secondary};
`;
