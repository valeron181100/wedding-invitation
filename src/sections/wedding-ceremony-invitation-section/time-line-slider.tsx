import { Slider, SliderFrame, Text, TitleText } from "../../components/view";
import {
	StyledChampagneIcon,
	StyledPeopleGroupIcon,
	StyledRingsIcon,
	StyledSleepingClockIcon,
	StyledSliderFrameCard,
} from "./styles";

export const TimeLineSlider = () => {
	const sliderFrameHeight = "262px";
	return (
		<Slider pagination navigation>
			<SliderFrame>
				<StyledSliderFrameCard
					direction={"column"}
					alignItems={"center"}
					justifyContent={"space-between"}
					p={"s2"}
					height={sliderFrameHeight}
				>
					<TitleText design={"on-secondary"}>17:50</TitleText>
					<StyledPeopleGroupIcon />
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
					p={"s2"}
					height={sliderFrameHeight}
				>
					<TitleText design={"on-secondary"}>18:20</TitleText>
					<StyledRingsIcon />
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
					p={"s2"}
					height={sliderFrameHeight}
				>
					<TitleText design={"on-secondary"}>18:40</TitleText>
					<StyledChampagneIcon />
					<Text
						design={"on-secondary"}
						fontSize={"s6"}
						style={{ textAlign: "center" }}
					>
						Начало фуршета
					</Text>
				</StyledSliderFrameCard>
			</SliderFrame>
			<SliderFrame>
				<StyledSliderFrameCard
					direction={"column"}
					alignItems={"center"}
					justifyContent={"space-between"}
					p={"s2"}
					height={sliderFrameHeight}
				>
					<TitleText design={"on-secondary"}>21:10</TitleText>
					<StyledSleepingClockIcon />
					<Text
						design={"on-secondary"}
						fontSize={"s6"}
						style={{ textAlign: "center" }}
					>
						Конец фуршета
					</Text>
				</StyledSliderFrameCard>
			</SliderFrame>
		</Slider>
	);
};
