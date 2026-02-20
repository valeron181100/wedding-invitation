import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Flex, SectionContainer, Text, TitleText } from "../../components/view";
import { SectionContainerContent } from "../../components/view/section-container";
import { ContactPlate } from "./contact-plate";
import { VkIcon } from "../../components/view/vk-icon";
import { useAppSettings } from "../../context/app-settings-context";

export const ContactsSection = () => {
	const { isCelebrationOnly } = useAppSettings();
	return (
		<SectionContainer design={"secondary"}>
			<SectionContainerContent direction="column" gap={"s6"}>
				<TitleText
					fullCursive
					design={"on-secondary"}
					fontSize={"s18"}
					style={{ alignSelf: "center" }}
				>
					Контакты
				</TitleText>

				<Flex
					pl={"s4"}
					pr={"s4"}
					direction={"column"}
					gap={"s6"}
					height={"100%"}
					justifyContent={"space-around"}
				>
					<Text
						design={"on-secondary"}
						fontSize={"s4"}
						style={{ textAlign: "center" }}
					>
						{isCelebrationOnly
							? "По всем вопросам связанным с церемонией бракосочетания и торжественным вечером в Альпина Парк г. Владикавказ вы можете обращаться к нашему организатору."
							: "По всем вопросам связанным с торжественным вечером в Альпина Парк г. Владикавказ вы можете обращаться к нашему организатору."}
					</Text>

					<Flex
						alignItems={"center"}
						gap={"s2"}
						justifyContent={"center"}
						width={"100%"}
					>
						<TitleText
							fullCursive
							design={"on-secondary"}
							fontSize={"s14"}
							style={{ alignSelf: "center" }}
						>
							Зарина
						</TitleText>
						<Flex gap={"s1"} alignItems={"center"} width={"initial"}>
							<ContactPlate
								to={"https://api.whatsapp.com/send?phone=79287518157"}
								size={"large"}
							>
								<WhatsAppIcon color={"primary"} fontSize={"large"} />
							</ContactPlate>
							<ContactPlate to={"+79287518157"} size={"large"}>
								<PhoneInTalkIcon color={"primary"} fontSize={"large"} />
							</ContactPlate>
							<ContactPlate to={"https://t.me/Zarina_V_Event"} size={"large"}>
								<TelegramIcon color={"primary"} fontSize={"large"} />
							</ContactPlate>
						</Flex>
					</Flex>

					<Text
						design={"on-secondary"}
						fontSize={"s4"}
						style={{ width: "100%", textAlign: "center" }}
					>
						По всем остальным вопросам можете писать нам.
					</Text>

					<Flex alignItems={"center"} gap={"s2"}>
						<TitleText
							fullCursive
							design={"on-secondary"}
							fontSize={"s14"}
							style={{ alignSelf: "center" }}
						>
							Валера
						</TitleText>
						<Flex style={{ flexWrap: "wrap" }} gap={"s1"} alignItems={"center"}>
							<ContactPlate
								to={"https://api.whatsapp.com/send?phone=79627461564"}
								size={"large"}
							>
								<WhatsAppIcon color={"primary"} fontSize={"large"} />
							</ContactPlate>
							<ContactPlate to={"+79888330937"} size={"large"}>
								<PhoneInTalkIcon color={"primary"} fontSize={"large"} />
							</ContactPlate>
							<ContactPlate to={"https://t.me/bondar_val"} size={"large"}>
								<TelegramIcon color={"primary"} fontSize={"large"} />
							</ContactPlate>
							<ContactPlate to={"https://vk.com/bondarvaleriy"} size={"large"}>
								<VkIcon fontSize={"large"} />
							</ContactPlate>
						</Flex>
					</Flex>
					<Flex alignItems={"center"} gap={"s2"}>
						<TitleText
							fullCursive
							design={"on-secondary"}
							fontSize={"s14"}
							style={{ alignSelf: "center" }}
						>
							Мира
						</TitleText>
						<Flex style={{ flexWrap: "wrap" }} gap={"s1"} alignItems={"center"}>
							<ContactPlate
								to={"https://api.whatsapp.com/send?phone=79600272774"}
								size={"large"}
							>
								<WhatsAppIcon color={"primary"} fontSize={"large"} />
							</ContactPlate>
							<ContactPlate to={"+79600272774"} size={"large"}>
								<PhoneInTalkIcon color={"primary"} fontSize={"large"} />
							</ContactPlate>
							<ContactPlate to={"https://t.me/mirka_pum"} size={"large"}>
								<TelegramIcon color={"primary"} fontSize={"large"} />
							</ContactPlate>
							<ContactPlate to={"https://vk.com/mirkapum"} size={"large"}>
								<VkIcon fontSize={"large"} />
							</ContactPlate>
						</Flex>
					</Flex>
				</Flex>
			</SectionContainerContent>
		</SectionContainer>
	);
};
