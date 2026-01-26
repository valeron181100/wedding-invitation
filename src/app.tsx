import { ThemeProvider } from "@emotion/react";
import { SnackbarProvider } from "notistack";
import { Body } from "./layout";
import { MainSection } from "./sections/main-section/main-section";
import { theme } from "./theme";
import { InviteMessageSection } from "./sections/invite-message-section/invite-message-section";
import { WeddingCeremonyInvitationSection } from "./sections/wedding-ceremony-invitation-section/wedding-ceremony-invitation-section";
import { CelebratingInvitationSection } from "./sections/celebrating-invitation-section/celebrating-invitation-section";
import { FormSection } from "./sections/form-section/form-section";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<SnackbarProvider maxSnack={1}>
				<Body>
					<MainSection />
					<InviteMessageSection />
					<WeddingCeremonyInvitationSection />
					<CelebratingInvitationSection />
					<FormSection />
				</Body>
			</SnackbarProvider>
		</ThemeProvider>
	);
};

export default App;
