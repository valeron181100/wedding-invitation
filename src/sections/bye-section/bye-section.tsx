import { SectionContainer } from "../../components/view";
import { ByeSectionImage } from "./bye-section-image";

export const ByeSection = () => {
	return (
		<SectionContainer direction="column" justifyContent={"space-between"}>
			<ByeSectionImage
				src={"/wedding-invitation/assets/wedding-good-bye-5.webp"}
			/>
		</SectionContainer>
	);
};
