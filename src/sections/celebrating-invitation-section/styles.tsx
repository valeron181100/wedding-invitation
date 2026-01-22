import styled from "@emotion/styled";
import { LocationIcon } from "../../components/view/location-icon";
import { PeopleGroupIcon } from "../../components/view/people-group-icon";
import { ChampagneIcon } from "../../components/view/champagne-icon";
import { SleepingClockIcon } from "../../components/view/sleeping-clock-icon";
import { RingsIcon } from "../../components/view/rings-icon";
import { PeoniesIcon } from "../../components/view/peonies-icon";
import { Card } from "../../components/view/card";

export const StyledLocationIcon = styled(LocationIcon)`
	width: 70px;
`;

export const StyledPeopleGroupIcon = styled(PeopleGroupIcon)`
	margin-top: -15px;
	width: 45%;
`;

export const StyledRingsIcon = styled(RingsIcon)`
	margin-top: -20px;
	width: 45%;
`;

export const StyledChampagneIcon = styled(ChampagneIcon)`
	margin-top: -30px;
	width: 45%;
`;

export const StyledSleepingClockIcon = styled(SleepingClockIcon)`
	margin-top: -30px;
	margin-right: -20px;
	width: 45%;
`;

export const StyledSliderFrameCard = styled(Card)`
	background-color: #fbf3d9;
`;

export const StyledPeoniesFirstIcon = styled(PeoniesIcon)`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;

	@media screen and (min-width: 1025px) {
		width: 70vw;
		//transform: translate(35vw, 20vh) scaleX(-1) rotate(-25deg);
		transform: translate(-35vw, -20vh) scaleX(-1) rotate(-25deg);
	}

	@media screen and (max-width: 1024px) {
		width: 70vw;
		transform: translate(-50%, -15vh) scaleX(-1) rotate(-25deg);
	}

	@media screen and (max-width: 800px) {
		width: 75vw;
		transform: translate(-50%, -12vh) scaleX(-1) rotate(-25deg);
	}

	@media screen and (max-width: 500px) {
		width: 75vw;
		transform: translate(-50%, -10vh) scaleX(-1) rotate(-25deg);
	}
`;
