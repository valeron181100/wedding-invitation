import { TitleText } from "../../components/view";
import { MainSectionContainer } from "./components/main-section-container";

export const MainSection = () => {
	return (
		<MainSectionContainer direction="column">
			<TitleText>Валера</TitleText>
			<TitleText
				style={{
					alignSelf: "flex-end",
				}}
				firstLettersItalicAmount={3}
			>
				& Мира
			</TitleText>
		</MainSectionContainer>
	);
};
