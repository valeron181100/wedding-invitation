import styled from "@emotion/styled";

export const Body = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;
	background-color: ${({ theme }) => theme.colors.background.secondary};
`;
