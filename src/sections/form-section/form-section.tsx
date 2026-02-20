import {
	FormContainer,
	FormErrorProvider,
	RadioButtonGroup,
} from "react-hook-form-mui";
import { Button } from "@mui/material";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { Flex, SectionContainer, TitleText } from "../../components/view";
import { SectionContainerContent } from "../../components/view/section-container";
import {
	StyledFormContainer,
	StyledLovelyFramePartBottomIcon,
	StyledLovelyFramePartTopIcon,
} from "./styles";
import { theme } from "../../theme";
import type { GuestFormSchema } from "./types";
import { useAppSettings } from "../../context/app-settings-context";
import { GuestFields } from "./guest-fields";

export const FormSection = () => {
	const { enqueueSnackbar } = useSnackbar();
	const [formSending, setFormSending] = useState(false);
	const { people: peopleCount } = useAppSettings();

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

	const showFormSuccessMessage = () => {
		enqueueSnackbar({
			message: "Анкета успешно отправлена.",
			variant: "success",
		});
	};

	const handleFormSuccess = async (data: GuestFormSchema) => {
		setFormSending(true);

		const payload = {
			guests: data.guests,
			inviteAnswerId: data.inviteAnswerId,
			createdAt: new Date().toISOString(),
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
				showFormSuccessMessage();
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
								<Button
									type={"submit"}
									loading={formSending}
									variant={"outlined"}
									size={"large"}
								>
									Отправить
								</Button>
							</Flex>
						</FormErrorProvider>
					</FormContainer>
					<StyledLovelyFramePartBottomIcon style={{ marginTop: 16 }} />
				</StyledFormContainer>
			</SectionContainerContent>
		</SectionContainer>
	);
};
