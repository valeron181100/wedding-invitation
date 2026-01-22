import { useTheme } from "@emotion/react";
import { Slider, SliderFrame, Text, TitleText } from "../../components/view";
import {
	StyledChampagneIcon,
	StyledPeopleGroupIcon,
	StyledRingsIcon,
	StyledSliderFrameCard,
} from "./styles";

export const TimeLineSlider = () => {
	const sliderFrameHeight = "262px";
	const theme = useTheme();

	return (
		<Slider
			pagination
			navigation
			navButtonsColor={"primary"}
			paginationColor={theme.palette.secondary.contrastText}
		>
			<SliderFrame>
				<StyledSliderFrameCard
					direction={"column"}
					alignItems={"center"}
					justifyContent={"space-between"}
					design={"primary"}
					p={"s2"}
					height={sliderFrameHeight}
				>
					<TitleText design={"on-secondary"}>16:00</TitleText>
					<StyledPeopleGroupIcon color={theme.palette.secondary.contrastText} />
					<Text
						design={"on-secondary"}
						fontSize={"s6"}
						style={{ textAlign: "center" }}
					>
						Сбор гостей
					</Text>
				</StyledSliderFrameCard>
			</SliderFrame>
			<SliderFrame>
				<StyledSliderFrameCard
					direction={"column"}
					alignItems={"center"}
					justifyContent={"space-between"}
					design={"primary"}
					p={"s2"}
					height={sliderFrameHeight}
				>
					<TitleText design={"on-secondary"}>17:00</TitleText>
					<StyledRingsIcon color={theme.palette.secondary.contrastText} />
					<Text
						design={"on-secondary"}
						fontSize={"s6"}
						style={{ textAlign: "center" }}
					>
						Церемония бракосочетания
					</Text>
				</StyledSliderFrameCard>
			</SliderFrame>
			<SliderFrame>
				<StyledSliderFrameCard
					direction={"column"}
					alignItems={"center"}
					justifyContent={"space-between"}
					design={"primary"}
					p={"s2"}
					height={sliderFrameHeight}
				>
					<TitleText design={"on-secondary"}>18:00</TitleText>
					<StyledChampagneIcon color={theme.palette.secondary.contrastText} />
					<Text
						design={"on-secondary"}
						fontSize={"s6"}
						style={{ textAlign: "center" }}
					>
						Начало торжества
					</Text>
				</StyledSliderFrameCard>
			</SliderFrame>
		</Slider>
	);
};
