import { Flex, TitleText } from "../../components/view";
import { MainSectionContainer } from "./components/main-section-container";
import { NamesTitle } from "./components/names-title";

export const MainSection = () => {
	return (
		<MainSectionContainer direction="column" justifyContent={"space-between"}>
			<NamesTitle />
			<Flex justifyContent={"flex-start"} alignItems={"center"}>
				<TitleText fontSize={"s13"} fullCursive style={{ marginLeft: 8 }}>
					Wedding Day
				</TitleText>
			</Flex>
		</MainSectionContainer>
	);
};
