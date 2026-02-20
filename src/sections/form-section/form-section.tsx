import {
	FormContainer,
	FormErrorProvider,
	RadioButtonGroup,
} from "react-hook-form-mui";
import { Button } from "@mui/material";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { AnimatePresence, motion } from "framer-motion";
import { Flex, SectionContainer, Text, TitleText } from "../../components/view";
import { SectionContainerContent } from "../../components/view/section-container";
import {
	StyledFormContainer,
	StyledLovelyFramePartBottomIcon,
	StyledLovelyFramePartTopIcon,
} from "./styles";
import { theme } from "../../theme";
import type { GuestFormSchema } from "./types";
import { AppVersion, useAppSettings } from "../../context/app-settings-context";
import { GuestFields } from "./guest-fields";

const inviteAnswerOptionsMap: Record<
	AppVersion,
	{ id: string; label: string }[]
> = {
	[AppVersion.EVERYWHERE]: [
		{
			id: "both",
			label: "Буду и на регистрации и на основном торжестве!",
		},
		{
			id: "reg-only",
			label: "Буду только на регистрации",
		},
		{
			id: "cel-only",
			label: "Буду только на основном торжестве",
		},
		{
			id: "no",
			label: "К сожалению не смогу присутствовать",
		},
	],
	[AppVersion.CELEBRATION_ONLY]: [
		{
			id: "cel-only",
			label: "Обязательно буду",
		},
		{
			id: "no",
			label: "К сожалению не смогу присутствовать",
		},
	],
};

export const FormSection = () => {
	const { enqueueSnackbar } = useSnackbar();
	const [formSending, setFormSending] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const { people: peopleCount, version } = useAppSettings();

	const defaultValues: GuestFormSchema = {
		guests: Array.from({ length: peopleCount ?? 1 }, () => ({ fullName: "" })),
		inviteAnswerId: "",
	};

	const showFormSendErrorMessage = () => {
		enqueueSnackbar({
			message:
				"Произошла ошибка при отправке анкеты, попробуйте переотправить немного позже, или обращайтесь в контакты в контактной информации.",
			variant: "error",
			autoHideDuration: 5000,
		});
	};

	const handleFormSuccess = async (data: GuestFormSchema) => {
		setFormSending(true);

		const payload = {
			guests: data.guests.filter((guest) => !!guest.fullName),
			siteVersion: version,
			invitedPeopleAmount: peopleCount,
			inviteAnswerId: data.inviteAnswerId,
		};

		try {
			const response = await fetch("http://localhost:7007/api/forms", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});

			if (!response.ok) {
				showFormSendErrorMessage();
			} else {
				setFormSubmitted(true);
			}

			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (_) {
			showFormSendErrorMessage();
		} finally {
			setFormSending(false);
		}
	};

	return (
		<SectionContainer design={"secondary"}>
			<SectionContainerContent
				direction="column"
				gap={"s14"}
				style={{
					overflowY: "auto",
				}}
			>
				<TitleText
					fullCursive
					design={"on-secondary"}
					fontSize={"s18"}
					style={{ alignSelf: "center" }}
				>
					Анкета
				</TitleText>
				<StyledFormContainer
					direction={"column"}
					alignItems={"center"}
					height={"100%"}
				>
					<StyledLovelyFramePartTopIcon style={{ marginBottom: 16 }} />

					<AnimatePresence mode="wait">
						{formSubmitted ? (
							<motion.div
								key="success"
								initial={{ opacity: 0, scale: 0.92 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.45, ease: "easeOut" }}
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									padding: "24px 0",
								}}
							>
								<Text
									design={"on-secondary"}
									fontSize={"s8"}
									style={{ textAlign: "center" }}
								>
									Анкета отправлена
								</Text>
							</motion.div>
						) : (
							<motion.div
								key="form"
								initial={{ opacity: 1 }}
								exit={{ opacity: 0, scale: 0.92 }}
								transition={{ duration: 0.3, ease: "easeIn" }}
							>
								<FormContainer<GuestFormSchema>
									onSuccess={handleFormSuccess}
									defaultValues={defaultValues}
								>
									<FormErrorProvider
										onError={(error) => {
											if (error.type === "required") {
												return "Это поле обязательно к заполнению";
											}
											return error?.message;
										}}
									>
										<Flex
											direction={"column"}
											alignItems={"center"}
											gap={"s10"}
											pl={"s9"}
											pr={"s9"}
										>
											<GuestFields />
											<RadioButtonGroup
												label="Просим вас подтвердить своё присутствие"
												name="inviteAnswerId"
												required
												formLabelProps={{
													style: {
														fontSize: theme.typography.h6.fontSize,
														marginBottom: "4px",
													},
												}}
												labelProps={{
													style: {
														fontSize: theme.typography.body2.fontSize,
													},
												}}
												options={inviteAnswerOptionsMap[version]}
											/>
											<Button
												type={"submit"}
												loading={formSending}
												variant={"contained"}
												size={"large"}
											>
												Отправить
											</Button>
										</Flex>
									</FormErrorProvider>
								</FormContainer>
							</motion.div>
						)}
					</AnimatePresence>

					<StyledLovelyFramePartBottomIcon style={{ marginTop: 16 }} />
				</StyledFormContainer>
			</SectionContainerContent>
		</SectionContainer>
	);
};
