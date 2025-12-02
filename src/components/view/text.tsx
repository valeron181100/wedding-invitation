import styled from "@emotion/styled";

export const Text = styled.span`
	font-family: ${({ theme }) => theme.typography.fontFamily.monospace};
	font-size: ${({ theme }) => theme.typography.fontSize.base};
`;
