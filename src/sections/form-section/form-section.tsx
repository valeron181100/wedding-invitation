import {
	FormContainer,
	FormErrorProvider,
	RadioButtonGroup,
	TextFieldElement,
} from "react-hook-form-mui";
import { Button } from "@mui/material";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { Flex, SectionContainer, TitleText } from "../../components/view";
import { StyledPeoniesFirstIcon } from "../celebrating-invitation-section/styles";
import { SectionContainerContent } from "../../components/view/section-container";
import {
	StyledFormContainer,
	StyledLovelyFramePartBottomIcon,
	StyledLovelyFramePartTopIcon,
} from "./styles";
import { theme } from "../../theme";
import type { GuestFormSchema } from "./types";

export const FormSection = () => {
	const { enqueueSnackbar } = useSnackbar();
	const [formSending, setFormSending] = useState(false);

	const showFormSendErrorMessage = () => {
		enqueueSnackbar({
			message:
				"Произошла ошибка при отправке анкеты, попробуйте переотправить немного позже, или обращайтесь в контакты в контактной информации.",
			variant: "error",
			autoHideDuration: 5000,
		});
	};

	const showFormSuccessMessage = () => {
		enqueueSnackbar({
			message: "Анкета успешно отправлена.",
			variant: "success",
		});
	};

	const handleFormSuccess = async (data: GuestFormSchema) => {
		setFormSending(true);
		const formData = new URLSearchParams();

		formData.append("fullName", data.fullName);
		formData.append("inviteAnswerId", data.inviteAnswerId);
		formData.append("access_key", "8e28a6fb-619f-42e8-adca-ccb37e2c6f4e");

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});

			if (!response.ok) {
				showFormSendErrorMessage();
			}

			showFormSuccessMessage();
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (_) {
			showFormSendErrorMessage();
		} finally {
			setFormSending(false);
		}
	};
	return (
		<SectionContainer design={"secondary"}>
			<StyledPeoniesFirstIcon />
			<SectionContainerContent direction="column" gap={"s14"}>
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
					<StyledLovelyFramePartTopIcon />
					<FormContainer<GuestFormSchema> onSuccess={handleFormSuccess}>
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
								<TextFieldElement
									required
									style={{
										width: "100%",
									}}
									size={"small"}
									autoComplete={"off"}
									margin={"dense"}
									label={"Фамилия Имя Отчество"}
									name={"fullName"}
								/>
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
									options={[
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
									]}
								/>
								<Button type={"submit"} loading={formSending}>
									Отправить
								</Button>
							</Flex>
						</FormErrorProvider>
					</FormContainer>
					<StyledLovelyFramePartBottomIcon />
				</StyledFormContainer>
			</SectionContainerContent>
		</SectionContainer>
	);
};
