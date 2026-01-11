import { ThemeProvider } from "@emotion/react";
import { Body } from "./layout";
import { MainSection } from "./sections/main-section/main-section";
import { theme } from "./theme";
import { InviteMessageSection } from "./sections/invite-message-section/invite-message-section";
import { WeddingCeremonyInvitationSection } from "./sections/wedding-ceremony-invitation-section/wedding-ceremony-invitation-section";
import { CelebratingInvitationSection } from "./sections/celebrating-invitation-section/celebrating-invitation-section";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Body>
				<MainSection />
				<InviteMessageSection />
				<WeddingCeremonyInvitationSection />
				<CelebratingInvitationSection />
			</Body>
		</ThemeProvider>
	);
};

export default App;
