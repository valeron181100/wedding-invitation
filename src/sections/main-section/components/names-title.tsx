import { Flex, TitleText } from "../../../components/view";

export const NamesTitle = () => {
	return (
		<Flex direction={"column"} alignItems={"center"} width={"100%"}>
			<TitleText firstLettersItalicAmount={1}>Валерий</TitleText>
			<TitleText fullCursive style={{ marginTop: "-25px" }}>
				&
			</TitleText>
			<TitleText firstLettersItalicAmount={1} style={{ marginTop: "-25px" }}>
				Мирослава
			</TitleText>
		</Flex>
	);
};
