import styled from "@emotion/styled";
import { HeartFigure } from "./heart-figure";

const StyledHeartFigure = styled(HeartFigure)`
	position: absolute;
	width: 100px;
	transform: translate(-3px, 28px);
`;

const DateContainerWrapper = styled.div<{ color?: string }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4px;

	& > span:first-of-type {
		color: ${({ theme, color }) =>
			color ?? theme.palette.secondary.contrastText};
		font-size: 1.3em;
		font-family: ${(props) => props.theme.typography.fontFamily};
	}

	& > span:last-of-type {
		color: ${({ theme, color }) =>
			color ?? theme.palette.secondary.contrastText};
		font-size: 2em;
		font-family: ${(props) => props.theme.typography.fontFamily};
		margin-top: -8px;
	}
`;

interface DateContainerProps {
	dayOfWeek: string;
	date: number;
	selected?: boolean;
	color?: string;
}

export const DateContainer = ({
	dayOfWeek,
	date,
	selected = false,
	color,
}: DateContainerProps) => {
	return (
		<DateContainerWrapper color={color}>
			{selected && <StyledHeartFigure color={color} />}
			<span>{dayOfWeek}</span>
			<span>{date}</span>
		</DateContainerWrapper>
	);
};
