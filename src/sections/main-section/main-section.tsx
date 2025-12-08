import { SectionContainer } from "../../components/view";
import { MainSectionImage } from "./components/main-section-image";

export const MainSection = () => {
	return (
		<SectionContainer direction="column" justifyContent={"space-between"}>
			<MainSectionImage src={"/public/assets/wedding-main.webp"} />
		</SectionContainer>
	);
};
