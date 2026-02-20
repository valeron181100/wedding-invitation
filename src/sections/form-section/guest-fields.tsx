import {
	TextFieldElement,
	useFieldArray,
	useFormContext,
} from "react-hook-form-mui";
import type { GuestFormSchema } from "./types";

export const GuestFields = () => {
	const { control } = useFormContext<GuestFormSchema>();
	const { fields } = useFieldArray({
		control,
		name: "guests",
	});

	return (
		<>
			{fields.map((field, index) => (
				<TextFieldElement
					key={field.id}
					required={index === 0}
					style={{ width: "100%" }}
					size={"small"}
					autoComplete={"off"}
					margin={"dense"}
					label={
						fields.length > 1
							? `Гость ${index + 1} — Фамилия Имя Отчество`
							: "Фамилия Имя Отчество"
					}
					name={`guests.${index}.fullName`}
				/>
			))}
		</>
	);
};
