import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Flex, SectionContainer, TitleText } from "../../components/view";
import { Envelope } from "./envelope/envelope";
import { EnvelopeText } from "./envelope-text";
import { EnvelopeTitle } from "./envelope-title";
import { TipMessage } from "./tip-message";

export const InviteMessageSection = () => {
	const letterContentRef = useRef<HTMLDivElement>(null);
	const [envelopeOpened, setEnvelopeOpened] = useState(false);

	const handleEnvelopeOpened = (opened: boolean) => {
		setEnvelopeOpened(opened);
	};

	return (
		<SectionContainer
			design={"primary"}
			direction="column"
			justifyContent={"space-between"}
		>
			<Flex direction={"column"} p={"s6"} alignItems={"center"}>
				<TitleText fullCursive fontSize={"s18"} style={{ alignSelf: "center" }}>
					Мы женимся!
				</TitleText>
				<Flex
					height={"100%"}
					width={"100%"}
					alignItems={"center"}
					justifyContent={"center"}
				>
					<Envelope
						style={{ marginBottom: 80 }}
						onOpenChange={handleEnvelopeOpened}
					>
						<Flex direction={"column"} gap={"s6"} ref={letterContentRef}>
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
				<AnimatePresence>{!envelopeOpened && <TipMessage />}</AnimatePresence>
			</Flex>
		</SectionContainer>
	);
};
