import { useTheme } from "@emotion/react";
import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
import { Flex, SectionContainer, Text, TitleText } from "../../components/view";
import { DateContainer } from "../../components/view/date-container";
import { StyledLocationIcon, StyledPeoniesFirstIcon } from "./styles";
import { TimeLineSlider } from "./time-line-slider";

export const CelebratingInvitationSection = () => {
	const theme = useTheme();

	return (
		<SectionContainer direction="column" gap={"s6"} design={"secondary"}>
			<StyledPeoniesFirstIcon />
			<TitleText
				fullCursive
				design={"on-secondary"}
				fontSize={"s18"}
				style={{ alignSelf: "center" }}
			>
				Торжество
			</TitleText>
			<Flex direction={"column"} p={"s6"} alignItems={"center"} gap={"s19"}>
				<Flex direction={"column"} alignItems={"center"} gap={"s1"}>
					<TitleText
						design={"on-secondary"}
						fontSize={"s6"}
						style={{ alignSelf: "center" }}
					>
						Июль
					</TitleText>
					<Flex gap={"s6"} justifyContent={"center"}>
						<DateContainer
							date={1}
							dayOfWeek={"ср"}
							color={theme.palette.secondary.contrastText}
						/>
						<DateContainer
							date={2}
							dayOfWeek={"чт"}
							color={theme.palette.secondary.contrastText}
						/>
						<DateContainer
							date={3}
							dayOfWeek={"пт"}
							color={theme.palette.secondary.contrastText}
						/>
						<DateContainer
							date={4}
							dayOfWeek={"сб"}
							selected
							color={theme.palette.secondary.contrastText}
						/>
						<DateContainer
							date={5}
							dayOfWeek={"вс"}
							color={theme.palette.secondary.contrastText}
						/>
						<DateContainer
							date={6}
							dayOfWeek={"пн"}
							color={theme.palette.secondary.contrastText}
						/>
						<DateContainer
							date={7}
							dayOfWeek={"вт"}
							color={theme.palette.secondary.contrastText}
						/>
					</Flex>
				</Flex>
				<Flex direction={"column"} alignItems={"center"} gap={"s10"}>
					<a
						href={
							"https://yandex.ru/maps/org/alpina_park/135232963569/?ll=44.573434%2C42.973447&z=18.37"
						}
						style={{
							textDecoration: "none",
						}}
					>
						<Flex gap={"s2"}>
							<StyledLocationIcon
								color={theme.palette.secondary.contrastText}
							/>
							<Flex direction={"column"} gap={"s1"}>
								<Text design={"on-secondary"}>Альпина парк</Text>
								<Text design={"on-secondary"}>
									Республика Северная Осетия — Алания, г. Владикавказ
								</Text>
							</Flex>
						</Flex>
					</a>
					<Flex gap={"s3"} alignItems={"center"} p={"s4"}>
						<PriorityHighRoundedIcon
							style={{
								transform: "scale(1.5, 1.8)",
								rotate: "-3deg",
								color: theme.palette.secondary.contrastText,
							}}
						/>
						<Text design={"on-secondary"} fontSize={"s4"}>
							Детали трансфера уточняются. Скоро мы поделимся ими с вами.
						</Text>
					</Flex>
					<TimeLineSlider />
				</Flex>
			</Flex>
		</SectionContainer>
	);
};
