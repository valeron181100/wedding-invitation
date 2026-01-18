import { useTheme } from "@emotion/react";
import { Flex, SectionContainer, Text, TitleText } from "../../components/view";
import { DateContainer } from "../../components/view/date-container";
import { StyledLocationIcon, StyledPeoniesSecIcon } from "./styles";
import { TimeLineSlider } from "./time-line-slider";

export const WeddingCeremonyInvitationSection = () => {
	const theme = useTheme();
	return (
		<SectionContainer direction="column" gap={"s6"}>
			<StyledPeoniesSecIcon />
			<TitleText
				fullCursive
				design={"on-secondary"}
				fontSize={"s18"}
				style={{ alignSelf: "center" }}
			>
				Регистрация
			</TitleText>
			<Flex direction={"column"} p={"s6"} alignItems={"center"} gap={"s21"}>
				<Flex direction={"column"} alignItems={"center"} gap={"s1"}>
					<TitleText
						design={"on-secondary"}
						fontSize={"s6"}
						style={{ alignSelf: "center" }}
					>
						Июнь
					</TitleText>
					<Flex gap={"s6"} justifyContent={"center"}>
						<DateContainer date={16} dayOfWeek={"вт"} />
						<DateContainer date={17} dayOfWeek={"ср"} />
						<DateContainer date={18} dayOfWeek={"чт"} />
						<DateContainer date={19} dayOfWeek={"пт"} selected />
						<DateContainer date={20} dayOfWeek={"сб"} />
						<DateContainer date={21} dayOfWeek={"вс"} />
						<DateContainer date={22} dayOfWeek={"пн"} />
					</Flex>
				</Flex>
				<Flex gap={"s2"}>
					<StyledLocationIcon color={theme.palette.secondary.contrastText} />
					<Flex direction={"column"} gap={"s1"}>
						<Text design={"on-secondary"}>ЗАГС</Text>
						<Text design={"on-secondary"}>Фурштатская ул., 52</Text>
						<Text design={"on-secondary"}>Санкт-Петербург</Text>
					</Flex>
				</Flex>
				<TimeLineSlider />
			</Flex>
		</SectionContainer>
	);
};
