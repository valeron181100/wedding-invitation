import styled from "@emotion/styled";
import { LocationIcon } from "../../components/view/location-icon";
import { PeopleGroupIcon } from "../../components/view/people-group-icon";
import { ChampagneIcon } from "../../components/view/champagne-icon";
import { SleepingClockIcon } from "../../components/view/sleeping-clock-icon";
import { RingsIcon } from "../../components/view/rings-icon";
import { PeoniesIcon } from "../../components/view/peonies-icon";
import { Card } from "../../components/view/card";

export const StyledLocationIcon = styled(LocationIcon)`
	width: 110px;
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

export const StyledPeoniesSecIcon = styled(PeoniesIcon)`
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1;

	@media screen and (min-width: 1025px) {
		width: 70vw;
		transform: translate(35vw, 20dvh) rotate(-25deg);
	}

	@media screen and (max-width: 1024px) {
		width: 65vw;
		transform: translate(50%, 20dvh) rotate(-25deg);
	}

	@media screen and (max-width: 800px) {
		width: 60vw;
		transform: translate(50%, 28dvh) rotate(-25deg);
	}

	@media screen and (max-width: 500px) {
		width: 90vw;
		transform: translate(50%, 30dvh) rotate(-25deg);
	}

	@media screen and (max-width: 400px) {
		width: 70vw;
		transform: translate(50%, 32dvh) rotate(-25deg);
	}
`;
