import { Flex, SectionContainer, TitleText } from "../../components/view";
import { Envelope } from "./envelope/envelope";
import { EnvelopeText } from "./envelope-text";
import { EnvelopeTitle } from "./envelope-title";

export const InviteMessageSection = () => {
	return (
		<SectionContainer
			design={"primary"}
			direction="column"
			justifyContent={"space-between"}
		>
			<Flex direction={"column"} gap={"s16"} p={"s6"} alignItems={"center"}>
				<TitleText fullCursive style={{ alignSelf: "center" }}>
					Мы женимся!
				</TitleText>
				<Envelope>
					<Flex direction={"column"} style={{ maxWidth: "800px" }} gap={"s10"}>
						<EnvelopeTitle>Приглашение на свадьбу!</EnvelopeTitle>
						<EnvelopeText>
							В этом году есть день, который станет для нас по-настоящему
							особенным. И мы хотим разделить его с теми, кто дорог нашему
							сердцу.
						</EnvelopeText>
						<EnvelopeText>
							С искренней радостью приглашаем вас присоединиться к нам на
							церемонии бракосочетания в Санкт-Петербурге и на праздничном
							торжестве во Владикавказе.
						</EnvelopeText>
					</Flex>
				</Envelope>
			</Flex>
			<Flex p={"s6"} />
		</SectionContainer>
	);
};
